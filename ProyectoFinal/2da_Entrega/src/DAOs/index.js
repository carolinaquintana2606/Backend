let productosDao
let carritosDao

switch ('mongo') {
    case 'json':
        const { default: ProdDaoArchivo } = await import('./products/ProdDaoArchivo.js')
        const { default: CartDaoArchivo } = await import('./cart/CartDaoArchivo.js')

        productosDao = new ProdDaoArchivo()
        carritosDao = new CartDaoArchivo()

        break

    case 'firebase':
        const { default: ProdDaoFirebase } = await import('./products/ProdDaoFirebase.js')
        const { default: CartDaoFirebase } = await import('./cart/CartDaoFirebase.js')

        productosDao = new ProdDaoFirebase()
        carritosDao = new CartDaoFirebase()

        break

    case 'mongodb':
        const { default: ProdDaoMongo } = await import('./products/ProdDaoMongo.js')
        const { default: CartDaoMongo } = await import('./cart/CartDaoMongo.js')

        productosDao = new ProdDaoMongo()
        carritosDao = new CartDaoMongo()

        break
    case 'mysql':
        const { default: ProdDaoSQL } = await import('./products/ProdDaoSQL.js')
        const { default: CartDaoSQL } = await import('./cart/CartDaoSQL.js')

        productosDao = new ProdDaoSQL()
        carritosDao = new CartDaoSQL()

        break

    case 'memoria':
        const { default: ProdDaoMemoria } = await import('./products/ProdDaoMemoria.js')
        const { default: CartDaoMemoria } = await import('./cart/CartDaoMemoria.js')

        productosDao = new ProdDaoMemoria()
        carritosDao = new CartDaoMemoria()

        break
    
}

export { productosDao, carritosDao }