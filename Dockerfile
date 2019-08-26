FROM node:11-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
COPY . /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "run", "prod"]