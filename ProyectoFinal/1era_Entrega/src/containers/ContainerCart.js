const fs = require("fs").promises

class ContainerCart {
    
    constructor(path){
        this.path=path
    }

    async createCart(){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(getData)
            
            let products = []
            let id
            let timestamp = Date.now()
            
            if ((data.length) === 0){
                id = 1
            }else{
                id = data.length + 1
            }
            
            let newCart = {id, timestamp, products}
            data.push(newCart)
            await fs.writeFile(this.path, JSON.stringify(data), "utf-8")
            
            return(newCart)
            
        }catch(error){
            console.log(error)
        }
    }

    async deleteById(id){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(getData)
            const newData = data.filter(cart => cart.id !== id)
            await fs.writeFile(this.path, JSON.stringify(newData));
            return (console.log(`Se ha eliminado el carrito con el ID N° ${id}`))
        }catch(error){
            console.log(error)
        }
    }

    async getById (id){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(getData)
            const getCartById = data.find(cart => cart.id == id)
            if (!getCartById){
                return(null)
            }else {

                return(getCartById.products)
            }

        }catch(error){
            console.log(error)
        }
    }

    async addProd (id, prodId){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(getData)
            const getCartById = data.find(cart => cart.id == id)
            if (!getCartById){
                return(console.log(`Carrito no encontrado`))
            }else {

                const {id, timestamp, products } = getCartById
                products.push(prodId)
                getCartById.products = products
                
                let getCarts = data.filter(cart => cart.id != id)
                getCarts.push(getCartById)
            
                await fs.writeFile(this.path, JSON.stringify(getCarts));
                return (getCartById)
            }
        }catch(error){
            console.log(error)
        }
    }

    async deleteByIdProd(id, idProd){
        try{
            const getData = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(getData)
            const getCartById = data.find(cart => cart.id == id)
            if (!getCartById){
                return(console.log(`Carrito no encontrado`))
            }else {

                const { id, timestamp, products } = getCartById
        
                const newProdsCart = products.filter(prod => prod.id != idProd)
                getCartById.products = newProdsCart
                
                let getCarts = data.filter(cart => cart.id != id)
                getCarts.push(getCartById)

                return(getCartById)
            
                await fs.writeFile(this.path, JSON.stringify(getCarts));
             
            }
        }catch(error){
            console.log(error)
        }

    }





}
module.exports = ContainerCart;
