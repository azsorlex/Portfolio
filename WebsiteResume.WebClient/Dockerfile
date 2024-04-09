FROM node:alpine
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

EXPOSE 5173
ENV API_URL https://arwebapi.azurewebsites.net:44373
CMD ["npm", "run", "serve"]