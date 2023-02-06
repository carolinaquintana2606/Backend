import ContainerMemoria from "../../containers/ContainerMemoria.js";

class CartDaosMemoria extends ContainerMemoria{
    async createCart (cart = { productos: []}){
        return super.save(cart)
    }
}

export default CartDaosMemoria;