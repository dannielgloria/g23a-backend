

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
            response.status(500).send('Internal Server Error');
        }
    }

}

export default new FrutaController();
