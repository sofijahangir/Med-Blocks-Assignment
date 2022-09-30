FROM node:16
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
COPY package*.json ./

RUN npm ci
COPY . .
CMD [ "npm", "start" ]