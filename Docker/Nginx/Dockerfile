# Example of a .dockerfile
FROM nginx:latest

WORKDIR /app
RUN apt-get update && apt-get install vim -y

# Entrypoint will run before any other command
#ENTRYPOINT ["echo", "beta"]

# CMD commands are overwriten by other commands
#CMD ["echo", "alpha"]

COPY html/ /usr/share/nginx/html
#$docker buld -t walopes/nginx-com-vim:latest

#$docker run -rm walopes/hello Willian echo 'oi'
#$docker run -rm walopes/hello Willian echo 'oi'
