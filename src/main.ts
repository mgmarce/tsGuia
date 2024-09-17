import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { CabeceraPagina } from './ejercicio1.ts'
import { Calculadora } from './ejercicio2.ts'
import { Cancion } from './ejercicio3.ts'
import { Cuenta } from './ejercicio4.ts'
import { Empleado } from './ejercicio5.ts'

const cabecera = new CabeceraPagina('Bienvenidos', 'Azul', 'Arial');
cabecera.obtenerPropiedades();
cabecera.setAlineacion('centrado');
cabecera.imprimirCabecera();

const calculadora = new Calculadora();
console.log(calculadora.sumar(3, 4)); 
console.log(calculadora.factorial(5));

const cancion = new Cancion('Imagine', 'Rock');
cancion.setAutor('John Lennon');
cancion.mostrarDatos();

const cuenta = new Cuenta('John Doe', 100, 'Ahorro', '12345');
cuenta.mostrarDatos();
cuenta.depositar(10);
cuenta.retirar(20);

const empleado = new Empleado('Ana', 'Perez', 'Calle Falsa 123', '555-5555', 25, 2000);
empleado.mostrarDatos();
empleado.imprimirSueldo();
empleado.esMayorDeEdad(); 


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
