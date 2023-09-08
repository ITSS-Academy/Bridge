FROM node:18-alpine3.17

WORKDIR /usr/src/app

COPY . .

RUN rm -rf node_modules

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]