/*. Crear una clase CabeceraPagina, que contenga 3 métodos, el primer método que obtenga el título, 
color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, 
derecha o izquierda y el tercer método que imprima todas las propiedades. */
export class CabeceraPagina {
    titulo: string;
    color: string;
    fuente: string;
    alineacion: string;
  
    constructor(titulo: string, color: string, fuente: string) {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
      this.alineacion = 'izquierda'; // Valor por defecto
    }
  
    setAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda') {
      this.alineacion = alineacion;
    }
  
    obtenerPropiedades(){
      console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }
  
    imprimirCabecera(): void {
      console.log(`El título "${this.titulo}" está alineado a la ${this.alineacion}, con color ${this.color} y fuente ${this.fuente}`);
    }
}
  
  /*const cabecera = new CabeceraPagina('Bienvenidos', 'Azul', 'Arial');
  cabecera.obtenerPropiedades();
  cabecera.setAlineacion('centrado');
  cabecera.imprimirCabecera();*/
  