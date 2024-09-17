/*Crea una clase llamada Canción:
    Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
    • Crear un constructor que reciba como parámetros el título y género de la canción.
    • Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
    • Crea un método para mostrar los datos de la canción. */
export class Cancion {
    titulo: string;
    genero: string;
    private autor: string;
        
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }
        
    setAutor(autor: string): void {
        this.autor = autor;
    }
        
    getAutor(): string {
        return this.autor;
    }
        
    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
    }
}

/* const cancion = new Cancion('Imagine', 'Rock');
cancion.setAutor('John Lennon');
cancion.mostrarDatos(); */
      