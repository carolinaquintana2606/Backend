import fs from 'fs/promises'

//const fs = require("fs").promises

class ContainerArchivo {
    
    constructor(path){
        this.path=path
    }

    async getAll(){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            
            return (JSON.parse(getData))
        }catch(error){
            console.log(error)
        }
        
    }

    async getById(id){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(getData)
            const getObjById = data.find(obj => obj.id == id)
            if (!getObjById){
                return(console.log("No Encontrado"))
            }else {
                return(getObjById)
            }

        }catch(error){
            console.log(error)
        }

    }


   async save(obj){
    try{
        const getData = await fs.readFile(this.path, "utf-8")
        const data = JSON.parse(getData)
        let id
        let timestamp = Date.now()
        
        if ((data.length) === 0){
            id = 1
        }else{
            id = data.length + 1
        }
        let newObj = {...obj, id, timestamp}
        data.push(newObj)
        await fs.writeFile(this.path, JSON.stringify(data), "utf-8")
        return (newObj)
        
        
    }catch(error){
        console.log(error)
    }
    }

    async updateById(id, obj){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            let data = JSON.parse(getData)
            const objId = data.find((obj) => obj.id ===id)
        if (objId){
            let timestamp = Date.now()
           const objsFilter = data.filter((obj) => obj.id != id)
           const objUpdate = {...obj, id, timestamp}
           data = [...objsFilter, objUpdate]
           
           fs.writeFile(this.path, JSON.stringify(data), "utf-8")

           return(objUpdate)
           
        } else{
                return({ERROR: 'Producto no encontrado'})
            }
        
        }catch(error){
            console.log(error)}
    }
    

    async deleteById(id){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(getData)
            const newData = data.filter(obj => obj.id !== id)
            await fs.writeFile(this.path, JSON.stringify(newData));
            return(console.log(`El producto del ID N° ${id} fue eliminado correctamente`))

        }catch(error){
            console.log(error)
        }
    }

    async deleteAll(){
        try{
            await fs.writeFile(this.path, JSON.stringify([]), "utf-8")
        }catch(error){
            console.log(error)
        }
    }
}

export default ContainerArchivo;
