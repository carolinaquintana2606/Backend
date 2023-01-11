const fs = require('fs').promises

class ContainerMensajes {
    constructor(){
    
        //this.mensajes = []
    }

    async getAll(){
        try{
            const getData = await fs.readFile('./database/mensajes.json', "utf-8")
            JSON.parse(getData)
            //(this.mensajes).push(getData)
            return(getData)
        }catch(error){
            console.log(error)
        }
        
    }

    async update(obj){
        try{
            const getData = await fs.readFile('./database/mensajes.json', "utf-8")
            JSON.parse(getData)
            getData.push(obj)
            await fs.writeFile('./database/mensajes.json', JSON.stringify(getData), "utf-8")
            
        }catch(error){
            console.log(error)
        }
        }
}

module.exports = ContainerMensajes