#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
EXPOSE 8080
EXPOSE 8081
USER app
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Portfolio.WebApi/Portfolio.WebApi.csproj", "Portfolio.WebApi/"]
COPY ["Portfolio.Application/Portfolio.Application.csproj", "Portfolio.Application/"]
COPY ["Portfolio.Domain/Portfolio.Domain.csproj", "Portfolio.Domain/"]
COPY ["Portfolio.Infrastructure/Portfolio.Infrastructure.csproj", "Portfolio.Infrastructure/"]
RUN dotnet restore "./Portfolio.WebApi/Portfolio.WebApi.csproj"
COPY . .
WORKDIR "/src/Portfolio.WebApi"
RUN dotnet build "./Portfolio.WebApi.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Portfolio.WebApi.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Portfolio.WebApi.dll"]