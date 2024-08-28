FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src/prisma ./prisma

COPY . .

RUN npx prisma generate

EXPOSE 3000


CMD [ "npm","start" ]