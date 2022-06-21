FROM node:16.0.0-alpine

WORKDIR /myapp

COPY ["package.json", "yarn.lock", "/myapp/"]

RUN yarn install &&  yarn add -D typescript

COPY [".", "/myapp"]

EXPOSE 8000

CMD ["yarn", "dev"]