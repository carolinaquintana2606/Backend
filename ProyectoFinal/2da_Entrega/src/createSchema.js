import knex from 'knex'
import config from './config.js'
import mongosee from 'mongoose'
const exists = true;
const knexMySQL = knex(config.mysql)
const knexSqlLite = knex(config.sqlite3)


    
knexMySQL.schema.hasTable('productos').then(exists =>{
    if(!exists){
        knexMySQL.schema.createTable('productos', table => {
            table.increments('id').primary();
            table.string('name', 15).notNullable();
            table.string('code', 10).notNullable();
            table.float('price');
            table.integer('stock');
        }).then(() => console.log('tabla productos en MySql creada con éxito'))
        .catch(error =>{
            console.log('error al crear tabla PRODUCTOS en MySql');
            console.log(error);
        }).finally(()=>{
            knexMySQL.destroy()}) 
    }
})


knexSqlLite.schema.hasTable('mensajes').then(exists =>{
    if(!exists){
        knexSqlLite.schema.createTable('mensajes', table => {
            table.increments('id').primary();
            table.string('user', 15).notNullable();
            table.string('message', 200).notNullable();
            table.dateTime('date').notNullable;
        }).then(() => console.log('tabla productos en SqLite creada con éxito'
        )).catch(error =>{
            console.log('error al crear tabla ARTICULOS en SQLite');
            console.log(error);
        }).finally(()=>{
            knexMySQL.destroy()}) 
    }
})

  mongoSchemaProd = () =>{ new mongosee.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    code: { type: Number, required: true, unique: true },
    thumbnail: { type: String, required: true },
    stock: { type: Number, required: true },
    id: {type: Number, required: true},
    timestamp: {type: Number, required: true}
})}

mongoSchemaCart = () =>{ new mongosee.Schema({
   
    id: {type: Number, required: true},
    timestamp: {type: Number, required: true},
    products: {type: Array, required: ture}
})}

 

  export { mongoSchemaProd, mongoSchemaCart }