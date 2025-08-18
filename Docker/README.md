
# Docker commands

## Run docker

$docker exec -it aa334fds9 bash# execute the container iteractively
$docker run -it ubuntu:latest bash tty # attach the ubuntu image to bash
$docker run -it --rm ubuntu:latest bash tty # remove container just after executing it
$ docker run -p 8080:80 -it nginx bash # set a port to publish
$docker run -d -p 80:80 nginx # -d is to detach the applciation
$docker exec nginx ls # run a command into the container
$docker exec -it nginx # open the container iteractively
$ docker run -d --name nginx -p 8080:80 -v /home/walopes/Projects/fullcycle24/docker/html/:/usr/share/nginx/html  nginx
	# -v mounts container folder outside (older command, not use it anymore) -- Create the folder if not exists
$ docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)",target=/usr/share/nginx/html nginx
	# newer command, recommended - do not create any folder - it will raise errors

## Docker volume

$docker volume
$docker volume create meuvolume

$docker network ls
> default is docker bridge
$docker network create --driver bridge minharede
$docker network connect minharede ubuntu
$docker inspect minharede
$docker run --rm -d --name nginx --network host nginx

## docker-compose

$docker-compose up -d --build # Build and execute docker-compose in detached mode
> dockerize - to control dependencies between containers

# Accessing physical machine from the container =>> host.docker.internal
# eg.: curl http://host.docker.internal:8080
