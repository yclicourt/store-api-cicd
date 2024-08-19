FROM node:alpine

RUN mkdir /app

LABEL manteiner="yoadev@mail.com"

LABEL project=store_api_cicd

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000


CMD [ "npm","start" ]