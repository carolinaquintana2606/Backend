import ContainerArchivo from "../../containers/ContainerArchivo.js"

class ProdDaoArchivo extends ContainerArchivo{
    constructor(){
        super ('dbProducts.json')
    }
   
}

export default ProdDaoArchivo;