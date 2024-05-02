using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Portfolio.WebApi.Middleware;
using Portfolio.Application.Services;
using Portfolio.Application.Services.Interfaces;
using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure;
using Portfolio.Infrastructure.Repositories;
using Portfolio.WebApi.Extensions;

var builder = WebApplication.CreateBuilder(args);
ConfigureServices(builder.Services);
var app = builder.Build();
Configure();
await InitialiseDatabase();
await app.RunAsync();

void ConfigureServices(IServiceCollection services)
{
    var mapperConfig = new MapperConfiguration(mc =>
    {
        mc.AddProfile(new MappingProfile());
    });

    services.AddControllers();
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();

    services.AddSingleton(mapperConfig.CreateMapper());

    services.AddTransient<ExceptionHandlingMiddleware>();

    services.AddScoped<IServiceManager, ServiceManager>();
    services.AddScoped<IRepositoryManager, RepositoryManager>();

    services.AddDbContextPool<RepositoryDBContext>(config =>
    {
        config.UseSqlServer(builder.Configuration.GetConnectionString("SQL"));
    });
}

void Configure()
{
    app.UsePathBase("/api");
    app.UseDefaultFiles();

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.DisplayRequestDuration();
        });
    }

    app.UseHttpsRedirection();
    app.UseRouting();
    app.UseAuthorization();
    app.MapControllers();
    app.UseMiddleware<ExceptionHandlingMiddleware>();
}

async Task InitialiseDatabase()
{
    using var scope = app.Services.CreateScope();
    await using var dbContext = scope.ServiceProvider.GetRequiredService<RepositoryDBContext>();

    await dbContext.Database.EnsureCreatedAsync();
}