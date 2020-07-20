
### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build 

### STAGE 2: Run ###
FROM nginx:latest
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
