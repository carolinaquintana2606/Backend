class Usuario{

    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    

    getFullName(){
        return(console.log(`Nombre y apellido del usuario: ${this.nombre} ${this.apellido}`))
    }

    addMascota(pet){
        (this.mascotas).push(pet)
    }

    countMascotas(){
        console.log(`El usuario tiene ${(this.mascotas).length} mascotas`)
    }

    addBook(titulo, autor){
        
        (this.libros).push({ titulo: titulo, autor: autor })
    }

    getBooksName(){
        let titulos = []
        for ( libro of this.libros){
           titulos.push(libro.titulo) 
        }
    }
}





let usuario = new Usuario("Carolina", "Quintana")
usuario.getFullName()
usuario.addMascota("gato")
usuario.addMascota("perro")
usuario.countMascotas()
usuario.addBook("Harry Potter", "JK Rowling")
usuario.addBook("100 años de soledad", "Garcia Marquez")
usuario.getBooksName
console.log(usuario)