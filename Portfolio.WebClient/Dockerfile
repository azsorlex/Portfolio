FROM node:alpine as base
WORKDIR /app
ENV API_URL https://arwebapi.azurewebsites.net
EXPOSE 5173

FROM base as build
COPY . .
RUN npm install
RUN npm run lint
RUN npm run build
RUN npm prune --omit=dev

FROM base as final
COPY --from=build /app/package*.json /app/vite.config.ts ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

CMD ["npm", "run", "preview"]