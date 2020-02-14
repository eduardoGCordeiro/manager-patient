FROM node:8.17.0-alpine

WORKDIR /usr/src/manager-patient

COPY package.json ./client
COPY package-lock.json ./client

COPY package.json .
COPY package-lock.json .

RUN apk add openjdk8-jre-base

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 3000
EXPOSE 5000
EXPOSE 8000
