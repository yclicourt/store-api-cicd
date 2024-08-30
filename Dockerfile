FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./src/.env ./

EXPOSE 3000

CMD npm run generate && npm run migrate && npm start