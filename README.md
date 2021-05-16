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
