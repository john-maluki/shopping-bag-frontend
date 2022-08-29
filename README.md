# SHOPPING-BAG FRONTEND

## Overview

Enables users to interact with backend services while carrying out window shopping; For example, pre-logging (user registration and login) and managing products, shops, and user-bags (myBags).

## Requirements

For building and running the application you need:

- [ React version 18.2.0](https://reactjs.org/versions/)
- [ Nodejs version - v8.10.0+](https://nodejs.org/en/about/releases/)
- [npm version - 8.1.3+](https://www.npmjs.com/package/npm?activeTab=versions)

## Packages

- [ react-dom version - 18.2.0](https://www.npmjs.com/package/react-dom)
- [ axios version - 0.27.2](https://www.npmjs.com/package/axios)
- [ jwt-decode version - 3.1.2](https://www.npmjs.com/package/jwt-decode)
- [ joi version - 17.6.0](https://www.npmjs.com/package/joi)
- [ react-toastify version - 9.0.8](https://www.npmjs.com/package/react-toastify)
- [ react-loader-spinner version - 5.1.7-beta.1](https://www.npmjs.com/package/react-loader-spinner)

## Running the application locally

There are several ways to run this (`React` application) on your local machine. On your favorite IDE terminal navigate to main directory. In this case `shoppingbag-frontend`.

> Run `npm install` command first, to install required packages like so:

```shell
npm install
```

> Then, run `npm start`, to kick off application

```shell
npm start
```

Alternatively, with [Docker](https://hub.docker.com/) installed on your platform:

> Run `npm install` command to install packages as mention above. Finally, `docker-compose up`.

```shell
docker-compose up
```

> OR, run docker image (`maluki/shoppingbag-frontend:0.0.1-SNAPSHOT`) like so:

```shell
docker pull maluki/shoppingbag-frontend:0.0.1-SNAPSHOT
```

> finally, run image in the container

```shell
docker run -p 3000:3000 maluki/shoppingbag-frontend:0.0.1-SNAPSHOT
```

To view the running application move to `http://localhost:3000` on your favorite browser.

## Copyright

Released under the MIT License. See the [LICENSE](https://github.com/john-maluki/shopping-bag-frontend/blob/main/LICENSE) file.
