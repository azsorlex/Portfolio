using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Portfolio.WebApi.Middleware;
using Portfolio.Application.Services;
using Portfolio.Application.Services.Interfaces;
using Portfolio.Domain.Repositories;
using Portfolio.Infrastructure.Repositories;
using Portfolio.WebApi.Extensions;
using Portfolio.Infrastructure.DBContexts.SQL;
using Portfolio.Infrastructure.DBContexts.MongoDB;
using Newtonsoft.Json.Converters;

var builder = WebApplication.CreateBuilder(args);
ConfigureServices(builder.Services);
var app = builder.Build();
Configure();

var scope = app.Services.CreateScope();
await Task.WhenAll(InitialiseSQLDatabase(), InitialiseMongoDatabase());
scope.Dispose();
await app.RunAsync();

void ConfigureServices(IServiceCollection services)
{
    var mapperConfig = new MapperConfiguration(mc =>
    {
        mc.AddProfile(new MappingProfile());
    });

    services
        .AddControllers()
        .AddNewtonsoftJson(options =>
        {
            options.SerializerSettings.Converters.Add(new StringEnumConverter());
        });
    services.AddSwaggerGenNewtonsoftSupport();
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();

    services.AddSingleton(mapperConfig.CreateMapper());
    services.AddSingleton<IConfiguration>(builder.Configuration);

    services.AddTransient<ExceptionHandlingMiddleware>();

    services.AddScoped<IServiceManager, ServiceManager>();
    services.AddScoped<IRepositoryManager, RepositoryManager>();

    services.AddDbContextPool<SQLDBContext>(config =>
    {
        config.UseSqlServer(builder.Configuration.GetConnectionString("SQL"));
    });
    services.AddDbContextPool<MongoDBContext>(config =>
    {
        config.UseMongoDB(builder.Configuration.GetConnectionString("MongoDB"), "portfoliowebsite");
    });
}

void Configure()
{
    app.UsePathBase("/api");
    app.UseDefaultFiles();

    if (app.Environment.EnvironmentName.StartsWith("Development"))
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

async Task InitialiseSQLDatabase()
{
    await using var dbContext = scope.ServiceProvider.GetRequiredService<SQLDBContext>();
    await dbContext.Database.EnsureCreatedAsync();
}

async Task InitialiseMongoDatabase()
{
    await using var dbContext = scope.ServiceProvider.GetRequiredService<MongoDBContext>();
    await dbContext.Database.EnsureCreatedAsync();
}