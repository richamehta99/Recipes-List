FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/ionic-angular-course /usr/share/nginx/html
