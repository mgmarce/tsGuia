/*Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo. */
abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;
  
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.telefono = telefono;
      this.edad = edad;
    }
  
    esMayorDeEdad(): void {
      if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} es menor de edad.`);
      }
    }
  
    abstract mostrarDatos(): void;
  }
  
  class Empleado extends Persona {
    sueldo: number;
  
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
      super(nombre, apellido, direccion, telefono, edad);
      this.sueldo = sueldo;
    }
  
    cargarSueldo(sueldo: number): void {
      this.sueldo = sueldo;
    }
  
    imprimirSueldo(): void {
      console.log(`El sueldo es: $${this.sueldo}`);
    }
  
    mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
    }
}
  
  // Uso:
  const empleado = new Empleado('Ana', 'Perez', 'Calle Falsa 123', '555-5555', 25, 2000);
  empleado.mostrarDatos();
  empleado.imprimirSueldo();
  empleado.esMayorDeEdad();
  