import ContainerFirebase from '../../containers/ContainerFirebase.js'

class CartDaoFirebase extends ContainerFirebase{
    constructor(){
        super('cart')
    }

    async createCart(cart = { productos: [] }){
        return super.save(cart)
    }
}

export default CartDaoFirebase;