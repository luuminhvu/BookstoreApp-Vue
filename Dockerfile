#UI build

FROM node:18

WORKDIR /app/server
COPY ./server/package.json /app/server
RUN npm install
CMD npm start

#UI build
FROM node:18
WORKDIR /app/client
COPY ./client/package.json /app/client
RUN npm install
CMD npm run build



