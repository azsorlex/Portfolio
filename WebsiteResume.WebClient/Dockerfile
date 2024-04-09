FROM node:alpine
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

ENV API_URL https://arwebapi.azurewebsites.net
EXPOSE 5173
CMD ["npm", "run", "serve"]