

class ContainerProducts {
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
       (this.products).push(obj)

        return (this.products)
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

module.exports = ContainerProducts
