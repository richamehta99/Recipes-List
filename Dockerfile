
### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /builddir
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build 

### STAGE 2: Run ###
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /builddir/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

