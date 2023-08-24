import db from "../database/db.js";

class FrutaDAO{

    async createFruta(nombre,descripcion,cantidad,precio){
        const [id] = await db('frutas')
            .insert({
                nombre,
                descripcion,
                cantidad,
                precio
            })
            .returning('id');
        
        return id
    }

    async getFrutaById(id){
        const fruta = await db('frutas')
            .select('*')
            .where({id})
            .first();

        return fruta
    }

    async updateFruta(id, updates){
        await db('frutas')
            .where({id})
            .update(updates);
            
        return true
    }

    async deleteFruta(id){
        await db('frutas')
            .where({id})
            .del();
        
        return true
    }

}

export default new FrutaDAO();