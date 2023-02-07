import {mongoSchemaProd, mongoSchemaCart } from '../createSchema.js'
import config from '../config.js'

let productosDao
let carritosDao

switch ('mongo') {
    case 'json':
        const { default: ProdDaoArchivo } = await import('./products/ProdDaoArchivo.js')
        const { default: CartDaoArchivo } = await import('./cart/CartDaoArchivo.js')

        productosDao = new ProdDaoArchivo('../db/dbProducts.json')
        carritosDao = new CartDaoArchivo('../db/dbCart.json')

        break

    case 'firebase':
        const { default: ProdDaoFirebase } = await import('./products/ProdDaoFirebase.js')
        const { default: CartDaoFirebase } = await import('./cart/CartDaoFirebase.js')

        productosDao = new ProdDaoFirebase('products')
        carritosDao = new CartDaoFirebase('cart')
        

        break

    case 'mongodb':
        const { default: ProdDaoMongo } = await import('./products/ProdDaoMongo.js')
        const { default: CartDaoMongo } = await import('./cart/CartDaoMongo.js')

        productosDao = new ProdDaoMongo('products', mongoSchemaProd)
        carritosDao = new CartDaoMongo('cart', mongoSchemaCart)

        break
    case 'mysql':
        const { default: ProdDaoSQL } = await import('./products/ProdDaoSQL.js')
        const { default: CartDaoSQL } = await import('./cart/CartDaoSQL.js')

        productosDao = new ProdDaoSQL(config.mysql, 'products')
        carritosDao = new CartDaoSQL(config.mysql, 'cart')

        break

    case 'memoria':
        const { default: ProdDaoMemoria } = await import('./products/ProdDaoMemoria.js')
        const { default: CartDaoMemoria } = await import('./cart/CartDaoMemoria.js')

        productosDao = new ProdDaoMemoria()
        carritosDao = new CartDaoMemoria()

        break
    
}

export { productosDao, carritosDao }