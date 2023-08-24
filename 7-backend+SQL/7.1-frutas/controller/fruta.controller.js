

class FrutaController{

    async createFrutas(request, response){
        try {
            const id = await SERVICE;
            request.status(201).json(id);
        } catch (error) {
            console.error(error);
            response.status(500).send('Internal Server Error');
        }
    }

    async getFrutasById(request, response){
        try {
            const id = request.params.id;
            const fruta = await SERVICE;
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
            const success = await SERVICE

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
            const success = await SERVICE

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
