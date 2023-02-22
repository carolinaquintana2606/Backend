export default {
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: '../db/ecommerce.sqlite'
        },
        useNullAsDefault: true
    },
    mysql: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            database: 'desafio7'
        }
    }
}