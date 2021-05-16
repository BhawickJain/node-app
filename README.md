---
title: node-docker app
date: 16/05/2021 
author:
 - Bhawick Jain
or: 20210516101518
---

A waltkhrough of developing a full node-app within docker and making a scalable api-database with MongoDb and Nginx. The repo represents a minimal annotated example.

`[?]` Why commit the `package-lock.json` file?
`>>>` The goal of `package-lock`.json is keep an exact track of the versions used for every package [[node-doc-packagelock](https://nodejs.dev/learn/the-package-lock-json-file)]. When you `npm install` your `package.json`, any packages that follow [semver](https://semver.org) notation will be subject upgrade even if the last version was great. `package-lock.json` stops that, and npm simply installs the last version that worked whenever there is ambiguity. It also means that if you want to `npm update`, it will update all the package to latest version as limited by semver. Those updates are then reflected in the `package-lock`.json. Also mean don't have to commit a fat `node_modules` folder either.  

### Starting from Scratch with Docker

The follow settings for `Dockerfile` and `docker-compose.yaml` was super useful to jump in and build out the project.

```Dockerfile
FROM node:16
WORKDIR /app
RUN npm install —no-cache
```

```docker-compose
services:
  node-app:
    build: .
    # keep container from exiting
    stdin_open: true
    ports:
      - 3000:3000
    volumes:
      - ./app:/app
```

From here `docker compose up --build` and jump inside to install all the packages with `docker compose exec node-app /bin/bash`. Since there is a bind mount, the `./app` wille develop. Ensure you create a named or anonymous volume mount for `app/node_modules` and delete it from your local `app/` folder. Also ensure you ignore all files not required.

You can save yourself by simply clone this project and use the docker cli commands to jump right in and build out.

### References

[[node-semver](https://nodejs.dev/learn/semantic-versioning-using-npm)] Semantic Versioning using NPM (Node JS Getting Started)  
