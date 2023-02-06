import admin from "firebase-admin"
import config from '../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();


class ContainerFirebase{

    constructor(products) {
        this.collection = db.collection(products)
    }

    async getAll(){
        try{
            const getAllObjs = await (this.collection).get()
            getAllObjs = getAllObjs.docs
            const response = getAllObjs.map((obj) =>({
                id: prod.id,
                nombre: obj.data().title,
                precio: obj.data().price,
                descripcion: obj.data().description,
                codigo: obj.data().code,
                imagen: obj.data().thumbnail,
                stock: obj.data().stock,
                timestamp: obj.data().timestamp
            
            }))
            return (console.log(response))
        }catch(error){
            console.log(error)
        }
        
    }

    async getById(id){
        try{
            const doc = (this.collection).doc(`${id}`)
            const objById = await doc.get()
            objById = objById.data()
            
            return (prodById)

        }catch(error){
            console.log(error)
        }
    }


    async save(obj){
        try{
            const data = await (this.collection).get()
            data = data.docs
            let id
            let timestamp = Date.now()
            
            if ((data.length) === 0){
                id = 1
            }else{
                id = data.length + 1
            }

            let doc = (this.collection).doc(`${id}`)
            let newObj = {...obj, timestamp}
            await doc.create( {newObj})
            
            return (newObj)
            
        }catch(error){
            console.log(error)
        }
    }

    async updateById(id, obj){
        try{
            let timestamp = Date.now()
            let objUpdate = {...obj, timestamp}

            const doc = (this.collection).doc(`${id}`)
            await doc.update({...objUpdate})

            return(console.log('Producto actualizado'))
            
        }catch(error){
            console.log(error)}
    }

    async deleteById(id){
        try{
            const doc = (this.collection).doc(`${id}`)
            await doc.delete();
            return(console.log(`El producto del ID N° ${id} fue eliminado correctamente`))

        }catch(error){
            console.log(error)
        }
    }

    async deleteAll(){
        try{
            const doc = (this.collection).doc()
            await doc.delete();
            return(console.log("Productos Eliminados"))
            
        }catch(error){
            console.log(error)
        }
    }
}

export default ContainerFirebase;