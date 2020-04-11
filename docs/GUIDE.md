
# Development

### Vue Development prerequisites

First, you should be familiar with **Vue.js** or other similar frameworks (Angular, React, Polymer, etc...).

Vue.js is simple and easy to learn :

Follow this tutorial : [Getting started Vue.js](https://vuejs.org/v2/guide/)

Make sure you understand the following concepts :

* node.js  (server side running javascript using ChromeV8 engine)
* npm (node package manager to install node.js modules)
* webpack
* vue-router
* vue-cli (https://www.npmjs.com/package/vue-cli)

### **Install dependencies**

Download and Install :

 * node.js 
 * npm

Change path to **app directory** 

```$ cd app ```

Install dependencies (node.js and npm should be installed first)

```$ npm install ```

By running this command npm will locate **package.json** file and install all the dependencies and devDependencies in this file.

### **Run localy, dev mode**

```$ npm run serve ```

A local server will be available on localhost

```
http://localhost:8080

```

# Production

### .env file

Create .env file at root path and set the following variables 

* **BIOGRAPHY_API_URL**
* **PROJECTS_API_URL**

```s
# .env

BIOGRAPHY_API_URL=http://192.168.1.17:8000
PROJECTS_API_URL=http://192.168.1.17:8000

```

### **Package and deploy**

```s

# http only

docker-compose -f docker-compose.httponly.yaml build --build-arg BIOGRAPHY_API_URL --build-arg PROJECTS_API_URL
docker-compose -f docker-compose.httponly.yaml up -d 

# https

```