import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContainerMongo {
    constructor (collection, collectionSchema) {
        this.collection = mongoose.model(collection, collectionSchema)
    }

    async getAll(){
        try{
            return (await model.this.collection.find({}))
        }catch(error){
            console.log(error)
        }finally {
            mongoose.disconnect().catch(err => { throw new Error('error al desconectar la base de datos') })
        }
        
    }

    async getById(id){
        try{
            let objById = await model.this.collection.find({id: `${id}`})
            return (objById)

        }catch(error){
            console.log(error)
        }finally {
            mongoose.disconnect().catch(err => { throw new Error('error al desconectar la base de datos') })
        }
    }


    async save(obj){
        try{
            const data = await model.this.collection.find({ })
            
            let id
            let timestamp = Date.now()
            
            if ((data.length) === 0){
                id = 1
            }else{
                id = data.length + 1
            }
            let newObj = {...obj, id, timestamp}
            
            await model.this.collection.updateOne({ newObj })
            return (newObj)
            
            
        }catch(error){
            console.log(error)
        }finally {
            mongoose.disconnect().catch(err => { throw new Error('error al desconectar la base de datos') })
        }
    }
    
    async updateById(id, obj){
        try{
            let timestamp = Date.now()
            let objUpdate = {...obj, id, timestamp}
            await model.this.collection.updateOne({id: `${id}`}, {$set: {...objUpdate}})

            return(console.log('Producto actualizado'))
            
        }catch(error){
            console.log(error)
        }finally {
            mongoose.disconnect().catch(err => { throw new Error('error al desconectar la base de datos') })
        }
    }


    async deleteById(id){
        try{
            await model.this.collection.deleteOne({id: `${id}`})
            return(console.log(`El producto del ID N° ${id} fue eliminado correctamente`))

        }catch(error){
            console.log(error)
        }finally {
            mongoose.disconnect().catch(err => { throw new Error('error al desconectar la base de datos') })
        }
    }

    async deleteAll(){
        try{
            await model.this.collection.deleteMany({})
            return(console.log("Productos Eliminados"))
        }catch(error){
            console.log(error)
        }finally {
            mongoose.disconnect().catch(err => { throw new Error('error al desconectar la base de datos') })
        }
    }
}

export default ContainerMongo;