# new-node-typescript-mongodb


>npm init -y
>npm install express mongoose dotenv
>npm install -D typescript ts-node @types/node @types/express @types/mongoose nodemon
>npx tsc --init

new-node-typescript-mongodb
│── src/
│   ├── config/
│   │   ├── db.ts
│   ├── models/
│   │   ├── User.model.ts
│   ├── services/
│   │   ├── User.service.ts
│   ├── controllers/
│   │   ├── User.controller.ts
│   ├── routes/
│   │   ├── User.router.ts
│   │   ├── index.ts
│   ├── server.ts
│── package.json
│── tsconfig.json
│── .env
│── nodemon.json


Setup

Package.json 
-----------

  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "nodemon src/server.ts"
  },
tsconfig.json
-------------

{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}


Server.ts
--------



