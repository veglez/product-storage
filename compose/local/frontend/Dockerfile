FROM node:16-alpine

WORKDIR /app

COPY ["package.json", "/app/"]

RUN yarn install && yarn add -D typescript

EXPOSE 3000

COPY [".", "/app/"]

CMD [ "yarn", "run", "dev" ]