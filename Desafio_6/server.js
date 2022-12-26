const express = require("express");
const {Server: HttpServer } = require('http')
const {Server: IOServer} = require('socket.io')

const app = express();
const PORT = 8080;

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const ContainerProducts = require('./ContainerProducts.js')
const products = new ContainerProducts

const ContainerMensajes = require('./ContainerMensajes.js')
const mensajes = new ContainerMensajes("./mensajes.json")


//middleware
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))



//establecer conexion con el cliente
io.on('connection', socket=>{

    //eschuco msj del cliente
    socket.on('new-product', newProduct=>{
        products.createProd(newProduct)
        io.sockets.emit('productos', products)
        
    })

    

    socket.on('new-message', newMessage =>{
        mensajes.update(newMessage)
        console.log(mensajes)
        io.sockets.emit('mensajes', mensajes)
    })
})




const server = httpServer.listen(PORT, ()=>{
    console.log(`Servidor inicializado en el puerto ${PORT}`);
})

server.on('error', error=>{
    console.log(`Error en el servidor ==> ${error}`);
})