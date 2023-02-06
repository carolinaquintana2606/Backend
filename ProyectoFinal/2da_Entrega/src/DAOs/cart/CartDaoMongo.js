import ContainerMongo  from "../../containers/ContainerMongo.js";

class CartDaoMongo extends ContainerMongo{
    constructor(){
        super('cart', {
            productos: {type: [], required: true}
        })
    }

    async createCart(cart = { productos: [] }) {
        return super.save(cart)
    }
}

export default CartDaoMongo;