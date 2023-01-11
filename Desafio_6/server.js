const express = require("express");
const {Server: HttpServer } = require('http')
const {Server: IOServer} = require('socket.io')
const { engine } = require('express-handlebars')
const {router, products} = require('./router.js')
const app = express();
const PORT = 8070;

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

/*const ContainerProducts = require('./ContainerProducts.js')
const products = new ContainerProducts()*/

const ContainerMensajes = require('./ContainerMensajes.js')
const mensajes = new ContainerMensajes("./mensajes.json")



app.use(express.static('views'));

app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'hbs');

app.use('/', router);


/*app.use(express.json());
app.use(express.urlencoded({extended: true}))*/



/*app.get ("/", (req, res) => res.render('products', products))*/

//establecer conexion con el cliente
io.on('connection', socket=>{

    io.socket.emit('products', products.getAll())
    io.socket.emit('mensajes', mensajes.getAll())
   
    
  
    //eschuco msj del cliente
    socket.on('new-product', newProduct=>{
        products.createProd(newProduct)
        io.sockets.emit('products', products.getAll())
        
    })

    
    

    socket.on('new-message', newMessage =>{
        mensajes.update(newMessage)
        
        io.sockets.emit('mensajes', mensajes.getAll())
    })
})



const server = httpServer.listen(PORT, ()=>{
    console.log(`Servidor inicializado en el puerto ${PORT}`);
})

server.on('error', error=>{
    console.log(`Error en el servidor ==> ${error}`);
})