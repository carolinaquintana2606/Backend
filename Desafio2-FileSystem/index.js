const Container = require("./Container")
const products = new Container("./products.json")

const obj1 = {
    name: "maquillaje",
    price: 547,
    thumbnail: "url"
}

const obj2 = {
    name: "perfume",
    price: 600,
    thumbnail: "url"
}

const obj3 = {
    name: "perfume2",
    price: 1000,
    thumbnail: "url"
}

const deleteAll = async() =>{

    await products.getAll().then(data => {
        console.log(data)
    })

}

const write = async() =>{
    await products.deleteAll()
    
}

const save = async() =>{
    await products.save(obj1)
    await products.save(obj2)
    await products.save(obj3)
}

const getProduct = async() =>{
    await products.getById(2).then(product =>{
        console.log(product)
    })
    
}

const deleteProd = async () =>{
    await products.deleteById(1)
}


read()

deleteAll()

save()

getProduct()

deleteProd()