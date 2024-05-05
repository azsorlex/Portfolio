# WebApi Development Steps

## Prerequesites
- Ensure you create a new sysadmin user. Sample user credentials are defined in the connection string in appsettings.Development.

### Dev
- For VS 2022, run "IIS Express".
- For VS Code, run the ".NET Core Launch (web)" configuration.

### Docker (VS 2022)
- Run "Container (Dockerfile)"

### Docker (command line)
- Set the CD to the project root and run ```docker build -t api -f Portfolio.WebApi/Dockerfile .```
- Run the container with: ```docker run -p 29560:8080 -e ASPNETCORE_ENVIRONMENT=Development.Docker -e ASPNETCORE_HTTP_PORTS=8080 -it api```
- Go to [http://localhost:29560/swagger/index.html](http://localhost:29560/swagger/index.html) to see the swagger page.