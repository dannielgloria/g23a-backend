# Pasos para tener listo KNEX en dado caso que se pierdan en la clase

1. Instala Express.js usando npm:
```
npm i express
```
2. Instala knex usando npm:
```
npm i knex
```
3. Instala postgres usando npm:
```
npm i pg
```
4. Instala nodemon usando npm:
```
npm i nodemon
```
5. Inicializar proyecto
```
npm init -y
```
5. Crear archivo knex en carpeta db
```
knex init
```
6. Crear base de datos con knex 
```
npm knex migrate:latest --knexfile db/knexfile.js
```
7. creamos los scrips de package.js
```JSON
"migrate": "npx knex migrate:latest --knexfile ./db/knexfile.js",
"dev": "nodemon index.js",
```