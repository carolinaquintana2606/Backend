import ContainerFirebase from '../../containers/ContainerFirebase.js'

class ProdDaoFirebase extends ContainerFirebase{
    constructor(){
        super('products')
    }

}

export default ProdDaoFirebase;