
### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /app
COPY package.json ./
RUN npm install -g ionic
COPY ./ /app/
RUN npm run-script build:prod

### STAGE 2: Run ###
FROM nginx:latest
COPY --from=build /app/www/ /usr/share/nginx/html/

# COPY --from=build /app/dist/ /usr/share/nginx/html
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
