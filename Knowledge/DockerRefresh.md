Command
docker run hello-world
docker ps --all

docker run = docker create + docker start
docker create hello-world
d7dcb3fcb9a82d4baa78f5692aa9f8c7b5026433396957927a731503cfe4abd7
docker start -a d7dcb3fcb9a82d4baa78f5692aa9f8c7b5026433396957927a731503cfe4abd7
-a means make docker actually watch for output from the container and print it out to your terminal
docker run busybox echo hi there
echo hi there are something can run in the busybox environment
docker system prune delete
docker logs <id> do not need to rerun start command see log
docker stop <id> have time to save data (after 10s kill)
docker kill <id> directly shut down
docker exec -it <container id> <command>
eg: docker exec -it d03d6d3c116d redis-cli (-it can type)
eg: docker exec -it d03d6d3c116d sh (shell)
ctl D suspend

bash，zsh 和 sh 都是 UNIX 上的命令解释器（shell）。

bash 是一种常用的 shell，是最初的 GNU 项目的一部分。它是大多数 Linux 发行版的默认 shell。

zsh 是一种功能强大的 shell，比 bash 更具可扩展性和功能。它支持类似 bash 的语法，但还有许多额外的功能，如更强大的自动补全和脚本编写功能。

sh 是一种标准的 shell，与大多数 UNIX 系统一起使用。它提供了基本的 shell 功能，但没有 bash 或 zsh 的额外功能。

总而言之，bash 是最常用的 shell，但 zsh 也非常流行，并提供了更多的功能。 sh 是最小的 shell，通常用于执行脚本。

dockerfile - plain text files of configuration
| specify image, run command install program, specify command to run on container startup
docker client- docker cli
|
docker server - look at configuration build usable image, start new container

# use existing docker image

FROM alpine

# download install dependency

RUN apk add --update redis

#tell image what to do when start container
CMD [ "redis-server" ]

docker build .

docker container with a filesystem snapshoot
use filesystem alpine, and install redis (update),
(new image)
then use startup command redis-server to start the server
(new image)

docker can use cache, if nothing has changed, docker will use same image, by use cache

tagging an image
docker build <tag the image> -t abc/redis:latest .<directory of files/folders>

docker run -it alpine sh
#apk add --update redis
docker ps <get id>
docker commit -c 'CMD["redis-server"]' <id>

use this image hash: bbf713fc282d4525167cfab71da238ce8b1e21ec408e4d61711aa6fad904b699
to build the image

docker run -p(port) <incoming port>8080:<container port> <image id>
docker build -t <name> . (tag the current directory as some name, give image a name)
docker run <image id>
docker ps
docker exec -it <container id> <cmd>
docker logs <container>


eg: 
docker build -t micro/post
docker run micro/post
docker run -it micro/post sh
docker exec -it 1a036280ed35 sh (execute the given command in a running container)
docker logs 206502e69b5d
