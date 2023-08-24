import express from "express";// const express = require('express')
import router from "./routes/index";

const app = express();
app.use(express.json());

app.use(router)// se conectan las rutas que estan en la carpeta routes

app.listen(8080, ()=> console.log('Server listening on port 8080'))
