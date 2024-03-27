FROM node:18-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build-dev