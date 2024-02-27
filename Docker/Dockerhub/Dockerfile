FROM nginx:latest

COPY html /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

#docker build -t walopes/nginx-fullcycle .
#docker run --rm -d -p 8080:80 walopes/nginx-fullcycle bash
#docker push walopes/docker-fullcycle
