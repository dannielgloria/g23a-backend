import express from "express";
import frutaController from "../controller/fruta.controller";

const router = express.Router();
// Routes = EndPoins

router.get('/frutas/:id', frutaController.getFrutasById); //express.Router().get() = app.get();
router.post('/frutas', frutaController.createFrutas);
router.put('/frutas/:id', )
router.delete('/frutas/:id', )

export default {
    router
}