# Example of a .dockerfile
FROM nginx:latest

WORKDIR /app
RUN apt-get update && apt-get install vim -y

COPY html/ /usr/share/nginx/html
#$docker buld -t walopes/nginx-com-vim:latest
