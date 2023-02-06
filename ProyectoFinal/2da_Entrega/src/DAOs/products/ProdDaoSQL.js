import ContainerSQL from "../../containers/ContainerSQL.js";
import config from '../../config.js'

class ProdDaoSQL extends ContainerSQL{
    constructor(){
        super(config.mysql, 'products')
    }

}

export default ProdDaoSQL;