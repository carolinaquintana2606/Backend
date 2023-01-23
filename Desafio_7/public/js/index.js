const socket = io.connect();

//genero array nuevo producto y lo envio al servidor
const btnAddProd = document.getElementById("btnAddProd")
btnAddProd.addEventListener('click', (e) =>{
    e.preventDefault();
    const nombre = document.getElementById('name').value
    let precio = document.getElementById('price').value
    precio = parseFloat(price)
    const img = document.getElementById('thumbnail').value

    const newProduct = {
        name: nombre,
        price: precio,
        thumbnail: img
    }

    socket.emit('new-product', newProduct)
})


//recibo respuesta del servidor y cargo la tabla con los productos
socket.on('productos', async products => {

    const tableProducts = document.getElementById('productos')
    tableProducts.innerHTML += await makeHtmlTable(products)

});

// renderizo tabla de productos
function makeHtmlTable(productos) {
    return fetch('./views/products.hbs')
        .then(respuesta => respuesta.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla);
            const html = template({ productos })
            return html
        })
}


//genero array nuevo msj y envio al servidor

const btnAddMsj = document.getElementById("btnAddMsj")
btnAddProd.addEventListener('click', (e) =>{
    e.preventDefault();
    const username = document.getElementById('inputUsername').value
    const msj = document.getElementById('inputMensaje').value

    const newMsj = {
        username: username,
        message: msj,
        date : new Date().toLocaleDateString()
    }

    socket.emit('new-message', newMsj)
})

//recibo mensajes y renderizo
socket.on('mensajes', mensajes => {
    mensajes = JSON.parse(mensajes)
    const chat = document.getElementById('mensajes')
    const html = mensajes.map(msj =>{
        return (`<li>${msj.username}: ${msj.message}</li>`)
    })
    chat.innerHTML += html

})
