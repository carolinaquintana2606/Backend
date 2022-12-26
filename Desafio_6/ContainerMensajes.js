const fs = require('fs').promises

class ContainerMensajes {
    constructor(){
    
        this.mensajes = []
    }

    async getAll(){
        try{
            const getData = await fs.readFile('./mensajes.json', "utf-8")
            return JSON.parse(getData)
        }catch(error){
            console.log(error)
        }
        
    }

    async update(obj){
        try{
            const getData = await fs.readFile('./mensajes.json', "utf-8")
            const data = JSON.parse(getData)
            data.push(obj)
            await fs.writeFile('./mensajes.json', JSON.stringify(data), "utf-8")
            
        }catch(error){
            console.log(error)
        }
        }
}

module.exports = ContainerMensajes