
# Dockerization

- [Dockerization](#dockerization)
  - [Overview](#overview)
    - [Basic topics covered in the dockerization](#basic-topics-covered-in-the-dockerization)
    - [Files related to dockerization](#files-related-to-dockerization)
    - [Command to run the docker-compose file](#command-to-run-the-docker-compose-file)
    - [Colima](#colima)

## Overview

We use the docker to containarize the recat-app and its dependent services.Docker enables developers to easily pack, ship, and run any application as a lightweight, portable, self-sufficient container, which can run virtually anywhere

### Basic topics covered in the dockerization

- dockerfile
- docker-compose
- multi-stage docker builds
- ngnix-deploy
- containerize the react-app and mock-server

### Files related to dockerization

```txt
<rootDir>/
├── docker-compose.yaml
└── packages/
    ├── client/
    |   ├── .dockerignore
    |   ├── Dockerfile
    └── mock-server/
        ├── .dockerignore
        └── Dockerfile
```

### Command to run the docker-compose file

```bash
docker-compose -f ./docker-compose.yaml build
docker-compose -f ./docker-compose.yaml up
```

### Colima
If you do not have docker desktop on your machine, you can use [colima](https://github.com/abiosoft/colima) instead.

1. Install colima by following the instructions [here](https://github.com/abiosoft/colima/blob/main/README.md).
2. Make sure docker desktop is uninstalled to avoid conflicts.
3. Install docker cli and docker-compose cli.

```bash
$ brew install docker # install docker cli
$ brew install docker-compose # docker compose utility
```

4. Start colima by running the following command:

```
$ colima start
```
