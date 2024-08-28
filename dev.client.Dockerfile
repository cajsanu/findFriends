
FROM node:20

WORKDIR /client

COPY src/client/package*.json ./

RUN npm install

COPY src/client/ ./

CMD ["npm", "run", "dev"]