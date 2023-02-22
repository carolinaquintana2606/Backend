import express from 'express'
import faker from 'faker'
import { normalize, schema, denormalize } from 'normalizr'

import { Server as HttpServer } from 'http'
import { Server as Socket } from 'socket.io'

import ContenedorProductos from './containers/ContainerProducts.js'
import ContenedorMensajes from './containers/ContainerMensajes.js'

import config from './config.js'


// instancio servidor, socket y api

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

const productosApi = new ContenedorProductos (config.mysql, 'productos')
const mensajesApi = new ContenedorMensajes (config.mysql, 'mensajes')


// NORMALIZACIÓN DE MENSAJES

// esquema autor
const author = new schema.Entity('author', {idAtribute: 'email'});

// esquema mensaje
const text = new schema.Entity('text')

// esquema posts

const posts = new schema.Entity('posts', {
    author: {author},
    text: text
})


import util from 'util'
function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true));
}



async function listarMensajesNormalizados() {
    const getMsj = await mensajesApi.getAll()
    const normalizedMsj = normalize(getMsj, posts)
    return(print(normalizedMsj))
}




io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!');

    // carga inicial de productos
    io.sockets.emit('productos', await productosApi.getAll());

    // actualizacion de productos
    socket.on('update', async newProduct=>{
        products.createProd(newProduct)
        const  getAllProducts = await productosApi.getAll()
        io.sockets.emit('productos', getAllProducts)

    })


    // carga inicial de mensajes
    io.sockets.emit('mensajes', await listarMensajesNormalizados());

    // actualizacion de mensajes
    socket.on('nuevoMensaje', async newMessage =>{
        mensajesApi.update(newMessage)
        io.sockets.emit('mensajes', listarMensajesNormalizados())
    })

    
});



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


//consigna 1

function createProducts(){
    return{
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        thumbnail: faker.image.food()
    }
    
}
app.get('/api/productos-test', (req, res) => {

    const randomProducts = []

    for (let i = 0; i < 5; i++) {
    randomProducts.push(createProducts())
    }

    res.json(randomProducts)
    
})



const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))