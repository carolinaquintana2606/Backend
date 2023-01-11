
const socket = io.connect();

const addProduct = document.getElementById("addProduct")
const nameProd = document.getElementById('name').value
let priceProd = document.getElementById('price').value
priceProd = parseFloat(priceProd)
const imgProd = document.getElementById('thumbnail').value

//genero array nuevo producto y lo envio al servidor
addProduct && addProduct.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const newProduct = {
        name: nameProd,
        price: priceProd,
        thumbnail: imgProd
    }

    socket.emit('new-product', newProduct)

    e.target.reset();
	location.href = '/';
})


// recibo datos del server
socket.on('products', products => {
	renderProducts(products)
})


//cargo tabla de productos

const ListProducts = document.getElementById("ListProducts")
const renderProducts = products =>{
   products.forEach(prod => { ListProducts.innerHTML +=`<tr>
   <td>${product.name}</td>
   <td>${product.price}</td>
   <td>
       <img src="${product.img}" alt="${product.name}" width="100px">
   </td>
    </tr>`
   })}





const formMsj = document.getElementById("sendMsj")
const username = document.getElementById('username').value
const message = document.getElementById('message').value
const HistorialChat = document.getElementById("histChat")  

//genero array nuevo msj y envio al servidor
formMsj && formMsj.addEventListener('submit', (e) =>{
    e.preventDefault();

    const newMsj = {
        username: username,
        message: msj,
        date : new Date().toLocaleDateString()
    }

    socket.emit('new-message', newMsj)
    e.target.reset();
})


//recibo info del server
socket.on('mensajes', messages => {
    
    renderMsj(messages)
   
})


const renderMsj = messages => {
    messages.forEach(msj =>{
        HistorialChat.innerHTML +=`<div>
        <b class="text-primary">${message.username}</b>
        <span>${message.date}</span>
        : <i class="text-success">${message.message}</i>
    </div > `
    })
}




