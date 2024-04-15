FROM nginx:latest

WORKDIR /app
RUN apt-get update && apt-get install vim -y

COPY default.conf /etc/nginx/conf.d/default.conf