import ContainerArchivo from "../../containers/ContainerArchivo.js"

class CartDaoArchivo extends ContainerArchivo{
    constructor(){
        super ('dbCart.json')
    }

    async createCart(cart = {productos: []}){
        return super.save(cart)
    }
   
}

export default CartDaoArchivo;