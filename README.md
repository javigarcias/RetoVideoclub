

# Backend Videoclub

_Es un ejemplo para la creación de un Backend para una posible aplicación para la gestión de un videoclub con una base de datos relacional MySQL_

## Comenzando 🚀

_Para obtener el repositorio:_

 * [Git clone](https://github.com/javigarcias/RetoVideoclub)

### Pre-requisitos 📋

```
npm install
npm i sequelize express mysql2
```
### Ejecutando 

```
nodemon app.js
```

### DB 

_Creación de la Base de datos y las tablas_

```
sequelize db:create
sequelize db:migrate
```
### Endpoints 
- /users:
    - GET /userprofile
    - POST /signup
    - POST /login
    - DELETE /delete
- /films:
    - GET /
    - GET /:id
    - GET /title/:title
    - POST /
- /orders:
    - GET /
    - POST /

## Ejecutando las pruebas ⚙️

* [HEROKU TEST](https://reto-videoclub.herokuapp.com/)

## Construido con 🛠️

_Tecnologías utilizadas en el proyecto_

- Javascript
- NodeJS
- Express
- Sequelize
- MySQL
- XAMPP
- MySQLWorkbench
- Postman
- Heroki
- Git
- GitHub

## Autor ✒️

* **Javier García**  - [javigarcias](https://github.com/javigarcias)
 
---
⌨️ con ❤️ por [JaviGarcia](https://github.com/javigarcias) 😊
