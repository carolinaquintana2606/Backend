const fs = require("fs").promises

class ContainerProducts {
    
    constructor(path){
        this.path=path
    }

   async createProd(obj){
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
        let newProduct = {...obj, id, timestamp}
        data.push(newProduct)
        await fs.writeFile(this.path, JSON.stringify(data), "utf-8")
        return (newProduct)
        
        
    }catch(error){
        console.log(error)
    }
    }

    async updateById(id, obj){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            let data = JSON.parse(getData)
            const prodId = data.find((prod) => prod.id ===id)
        if (prodId){
            let timestamp = Date.now()
           const productsFilter = data.filter((prod) => prod.id != id)
           const prodUpdate = {...obj, id, timestamp}
           data = [...productsFilter, prodUpdate]
           
           fs.writeFile(this.path, JSON.stringify(data), "utf-8")

           return(prodUpdate)
           
        } else{
                return({ERROR: 'Producto no encontrado'})
            }
        

        }catch(error){
            console.log(error)}
        

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
            
            return (JSON.parse(getData))
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

module.exports = ContainerProducts
