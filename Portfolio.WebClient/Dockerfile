FROM node:alpine as base
WORKDIR /app
ENV API_URL https://arwebapi.azurewebsites.net
EXPOSE 5173

FROM base as build
COPY . .
RUN npm install
RUN npm run build

FROM base as final
COPY --from=build /app/package*.json /app/vite.config.ts ./
COPY --from=build /app/dist ./dist
RUN npm install --omit=dev

CMD ["npm", "run", "preview"]