
### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /app
COPY package.json ./
<<<<<<< HEAD
RUN npm install -g ionic
COPY ./ /app/
RUN npm run-script build:prod

### STAGE 2: Run ###
FROM nginx:latest
COPY --from=build /app/www/ /usr/share/nginx/html/

# COPY --from=build /app/dist/ /usr/share/nginx/html
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
=======
RUN npm install
COPY . .
RUN npm run build 

### STAGE 2: Run ###
FROM nginx:latest
COPY --from=build /app/dist/out/ /usr/share/nginx/html
COPY --from=build /nginx.conf /etc/nginx/conf.d/default.conf


>>>>>>> b37c35959f5266e1c01e1017dd800a8953d13f02
