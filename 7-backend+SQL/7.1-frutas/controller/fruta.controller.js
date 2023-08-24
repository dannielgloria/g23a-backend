import frutaServices from "../service/fruta.services.js";

class FrutaController{

    async createFrutas(request, response){
        try {
            /**
             * body es
             * {    nombre:"Banana",
             *      descripcion:"Banana verde",
             *      cantidad:2,
             *      precio: 1
             * }
             */
            const id = await frutaServices.createFruta(request.body);
            request.status(201).json(id);
        } catch (error) {
            console.error(error);
            response.status(500).send('Internal Server Error');
        }
    }

    async getFrutasById(request, response){
        try {
            const id = request.params.id;
            const fruta = await frutaServices.getFrutaById(id);
            if(!fruta){
                return response.status(404).send('Fruta not found');
            }           
            return response.status(201).json(fruta)
        } catch (error) {
            console.error(error);
            return response.status(500).send('Internal Server Error');
        }
    }

    async updateFruta(request, response){
        try {
            const id = request.params.id;
            const update = request.body;
            const success = await frutaServices.updateFruta(id,update)

            if (!success) {
                return response.status(404).send('Fruta not found');
            }
            request.status(201).send('Fruta actualizada');
        } catch (error) {
            console.error(error);
            return response.status(500).send('Internal Server Error');
        }
    }

    async deleteFruta(request, response){
        try {
            const id = request.params.id;
            const success = await frutaServices.deleteFruta(id);

            if (!success) {
                return response.status(404).send('Fruta not found');
            }
            return request.status(201).send('Fruta eliminada');
        } catch (error) {
            console.error(error);
            return response.status(500).send('Internal Server Error');
        }
    }
}

export default new FrutaController();
