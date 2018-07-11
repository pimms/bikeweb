#!/bin/bash

if [ -z "$ECS_DOCKER_REPO" ]; then
    echo 'ERROR: Variable "ECS_DOCKER_REPO" is undefined'
    exit 1
fi

eval $(aws ecr get-login | sed 's/-e none //')

docker build -t bikeweb . || exit 2
docker tag bikeweb:latest "$ECS_DOCKER_REPO/bikeweb:latest" || exit 3
docker push "$ECS_DOCKER_REPO/bikeweb:latest" || exit 4
