const express = require('express');
const router = require ('./router.js');


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use("/api/products", router);


const server = app.listen(PORT, () =>{
    console.log(`Servidor inicializado en el puerto ${PORT}`)
})
server.on('error', (error) =>{
    console.log('ERROR', error)
})