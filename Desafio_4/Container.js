class Container {
    constructor(){
        this.products = []
    }

    getAll(){
        return this.products;
    }

    getById(id){
        const prodId = this.products.find((prod) => prod.id ===id)
        if (prodId){
            return (prodId)
        } else{
                return({ERROR: 'Producto no encontrado'})
            }
    }

    createProd(obj){
        const data = this.products
        let id
        
        if ((data.length) === 0){
            id = 1
        }else{
            id = data.length + 1
        }
        let newProduct = {...obj, id}
        data.push(newProduct)

        return (newProduct)
    }

    updateById(id, obj){
        const prodId = this.products.find((prod) => prod.id ===id)
        if (prodId){
           const productsFilter = this.products.filter((prod) => prod.id != id)
           const prodUpdate = {...obj, id}
           this.products = [...productsFilter, prodUpdate]
           return(prodUpdate)
        } else{
                return({ERROR: 'Producto no encontrado'})
            }

    }

    deleteById(id){
        const prodId = this.products.find((prod) => prod.id ===id)
        if (prodId){
           const productsFilter = this.products.filter((prod) => prod.id != id)
           this.products = [...productsFilter]
           return(this.products)
        } else{
                return({ERROR: 'Producto no encontrado'})
            }

    }

}

module.exports = Container
