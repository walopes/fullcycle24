# Node Dockerfile
FROM node:16

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

EXPOSE 8000

CMD ["node", "index.js"]