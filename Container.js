const fs = require("fs").promises

class Container {
    
    constructor(path){
        this.path=path
    }

   async save(obj){
    try{
        const getData = await fs.readFile(this.path, "utf-8")
        const data = JSON.parse(getData)
        //console.log(data)
        let id
        
        if ((data.length) === 0){
            id = 1
        }else{
            id = data.length + 1
        }
        let newProduct = {...obj, id}
        //console.log(newProduct)
        data.push(newProduct)
        //console.log(data)
        await fs.writeFile(this.path, JSON.stringify(data), "utf-8")
        
    }catch(error){
        console.log(error)
    }
    }

    async getById(id){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(getData)
            const getProductById = data.find(prod => prod.id == id)
            if (!getProductById){
                return(null)
            }else {
                return(getProductById)
            }

        }catch(error){
            console.log(error)
        }

    }

    async getAll(){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            return JSON.parse(getData)
        }catch(error){
            console.log(error)
        }
        
    }

    async deleteById(id){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(getData)
            const newData = data.filter(prod => prod.id !== id)
            await fs.writeFile(this.path, JSON.stringify(newData));

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

module.exports = Container
