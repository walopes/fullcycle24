# Nginx Dockerfile
FROM nginx:latest

WORKDIR /app
RUN apt-get update && apt-get install vim -y

# Entrypoint will run before any other command
#ENTRYPOINT ["echo", "beta"]

# CMD commands are overwriten by other commands
#CMD ["echo", "alpha"]

COPY html/ /usr/share/nginx/html



