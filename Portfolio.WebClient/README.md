# WebClient Development Steps

## Prerequesites
- [Portfolio.WebApi/README.md](Portfolio.WebApi/README.md)
- Run ```npm i``` to install the packages.

### Dev
- Run ```npm run dev``` to start.

### Preview
- Run ```npm run build``` to build the production files.
- Run ```npm run preview``` to start the production build.

### Docker
- Set the CD to Portfolio.WebClient, then run ```docker build -t client .```
- Run the container with: ```docker run -p 5173:5173 -e TESTING=true -it client```
- Go to [http://localhost:5173](http://localhost:5173) to see the page in action.