import express from 'express'
import { Server as HttpServer } from 'http'
//const {Server: IOServer} = require('socket.io')
import { Server as Socket } from 'socket.io'
const app = express();
const PORT = 8080;

const httpServer = new HttpServer(app);
const io = new Socket(httpServer);

import config from './config.js';

import ContainerProducts from './Containers/ContainerProducts.js';
const products = new ContainerProducts(config.mysql, 'productos');

import ContainerMensajes from './Containers/ContainerMensajes.js';
const mensajes = new ContainerMensajes(config.sqlite3, 'mensajes');


//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.set('views', '../public/views');

//establecer conexion con el cliente
io.on('connection', socket=>{

    io.sockets.emit('productos', products.getAll());
    io.sockets.emit('mensajes', mensajes.getAll());

    //eschuco msj del cliente
    socket.on('new-product', newProduct=>{
        products.createProd(newProduct)
        const getAllProducts = products.getAll()
        io.sockets.emit('productos', getAllProducts)

    })



    socket.on('new-message', newMessage =>{
        mensajes.update(newMessage)
        const getAllMsj = mensajes.getAll()
        io.sockets.emit('mensajes', getAllMsj)
    })
})




const server = httpServer.listen(PORT, ()=>{
    console.log(`Servidor inicializado en el puerto ${PORT}`);
})

server.on('error', error=>{
    console.log(`Error en el servidor ==> ${error}`);
})