import frutaDao from "../dao/fruta.dao.js"

class FrutaService{
    async createFruta(frutaDto){
        const {nombre,descripcion,cantidad,precio} = frutaDto
        return frutaDao.createFruta(nombre,descripcion,cantidad,precio)
    }

    async getFrutaById(id){
        return frutaDao.getFrutaById(id)
    }

    async updateFruta(id, updates){
    
        return frutaDao.updateFruta(id, updates)
    }

    async deleteFruta(id){
        return frutaDao.deleteFruta(id)
    }
}

export default new FrutaService();