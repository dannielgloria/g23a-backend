
class FrutaService{
    async createFruta(frutaDto){
        const {nombre,descripcion,cantidad,precio} = frutaDto
        return FRUTADAO.createFruta(nombre,descripcion,cantidad,precio)
    }

    async getFrutaById(id){
        return FRUTADAO.getFrutaById(id)
    }

    async updateFruta(id, updates){
    
        return FRUTADAO.updateFruta(id, updates)
    }

    async deleteFruta(id){
        return FRUTADAO.deleteFruta(id)
    }
}

export default new FrutaService();