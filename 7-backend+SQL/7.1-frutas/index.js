import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

import express from "express";// const express = require('express')
import cors from 'cors'
import router from "./routes/index.js";

const PORT = process.env.PORT

const app = express();
app.use(express.json());

app.use(cors()) // Nos permite recibir peticiones una vez este en production.
app.use(router)// se conectan las rutas que estan en la carpeta routes

app.listen(PORT, ()=> console.log('Server listening on port ' + PORT))
