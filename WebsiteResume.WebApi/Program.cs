using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WebsiteResume.Application.Services;
using WebsiteResume.Application.Services.Interfaces;
using WebsiteResume.Domain.Repositories;
using WebsiteResume.Infrastructure;
using WebsiteResume.Infrastructure.Repositories;
using WebsiteResume.WebAPI.Extensions;
using WebsiteResume.WebAPI.Middleware;

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
        app.UseSwaggerUI();
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