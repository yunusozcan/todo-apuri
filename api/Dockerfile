# pull official base image
FROM node:14.15.1-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
RUN npm install --silent

# add app
COPY . .

# start app
EXPOSE 3000
ENTRYPOINT node src/index.js
