FROM anapsix/alpine-java

RUN apk add --update nodejs npm

WORKDIR /usr/src/manager-patient/

COPY package.json package-lock.json ./serve/
COPY package.json package-lock.json ./client/

RUN npm install ./serve
RUN npm install ./client

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 3000


