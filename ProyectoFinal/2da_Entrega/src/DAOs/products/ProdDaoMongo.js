import ContainerMongo  from "../../containers/ContainerMongo.js";

class ProdDaoMongo extends ContainerMongo{
    constructor(){
        super('products', {
            title: { type: String, required: true },
            price: { type: Number, required: true },
            thumbnail: { type: String, required: true },
        })
    }

}

export default ProdDaoMongo;