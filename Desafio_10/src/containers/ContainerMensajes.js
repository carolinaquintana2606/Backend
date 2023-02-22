import knex from "knex"

class ContainerMensajes {
    constructor(config, tabla){
        this.knexConnection = knex(config)
        this.tabla = tabla
    }

    async getAll(){
        try{
            return ((this.knexConnection).from(this.tabla).select('*'))
        }catch(error){
            console.log(error)
        }finally {
            knexConnection.destroy(); 
        }

    }

    async update(obj){
        try{
            await (this.knexConnection).from(this.tabla).update({ ...obj })
            
        }catch(error){
            console.log(error)
        }finally {
            knexConnection.destroy(); 
        }
    }
}

export default ContainerMensajes