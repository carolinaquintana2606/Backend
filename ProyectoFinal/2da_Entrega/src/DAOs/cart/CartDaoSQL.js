import ContainerSQL from "../../containers/ContainerSQL.js";
import config from '../../config.js'

class CartDaoSQL extends ContainerSQL{
    constructor(){
        super(config.mysql, config.mysql)
    }

}

export default CartDaoSQL;