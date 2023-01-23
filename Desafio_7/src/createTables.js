import knex from 'knex'
import config from './config.js'



try {
    const knexMySQL = knex(config.mysql)
    await knexMySQL.schema.createTable('productos', table => {
        table.increments('id').primary();
        table.string('name', 15).notNullable();
        table.string('code', 10).notNullable();
        table.float('price');
        table.integer('stock');
    });
    

    console.log('tabla productos en MySql creada con éxito')
} catch (error) {
    console.log('error al crear tabla productos en MySql')
    console.log(error)
}




try {
    const knexSqlLite = knex(config.sqlite3)

    await knexSqlLite.schema.createTable('mensajes', table => {
       
        table.string('user', 15).notNullable();
        table.string('message', 200).notNullable();
        table.dateTime('date');
      
    });

    console.log('tabla mensajes en sqlite3 creada con éxito')
} catch (error) {
    console.log('error al crear tabla mensajes en sqlite3')
    console.log(error)
}
