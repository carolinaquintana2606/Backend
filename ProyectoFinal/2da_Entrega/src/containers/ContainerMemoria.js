class ContainerMemoria {
    constructor(){
        this.array = []
    }

    getAll(){
        return this.productos;
    }

    getById(id){
        const objId = (this.array).find((obj) => obj.id ===id)
        if (objId){
            return (objId)
        } else{
                return({ERROR: 'Producto no encontrado'})
            }

    }

    save(obj){

        let id
        let timestamp = Date.now()
        
        if (((this.array).length) === 0){
            id = 1
        }else{
            id = (this.array).length + 1
        }

        let newObj = {...obj, id, timestamp}
        (this.array).push(newObj)
        
        return (newObj)
    }


    updateById(id, obj){

        const objId = (this.array).find((obj) => obj.id ===id)
        if (objId){
           const objsFilter = this.array.filter((obj) => obj.id != id)
           const objUpdate = {...obj, id}
           (this.array) = [...objsFilter, objUpdate]
           return(objUpdate)
        } else{
                return({ERROR: 'Producto no encontrado'})
        }

    }
  

    deleteById(id){
        const objId = this.array.find((obj) => obj.id ===id)
        if (objId){
           const objsFilter = this.array.filter((obj) => obj.id != id)
           this.array = [...objsFilter]
           return(this.array)
        } else{
                return({ERROR: 'Producto no encontrado'})
            }

    }

    deleteAll(){
        this.array = [];

        return(console.log('Productos Eliminados'))

    }
}

export default ContainerMemoria;