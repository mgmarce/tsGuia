import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { CabeceraPagina } from './ejercicio1.ts'
import { Calculadora } from './ejercicio2.ts'
import { Cancion } from './ejercicio3.ts'
import { Cuenta } from './ejercicio4.ts'
import { Empleado } from './ejercicio5.ts'

const cabecera = new CabeceraPagina('Holaa', 'Azul', 'Arial');
cabecera.obtenerPropiedades();
cabecera.setAlineacion('centrado');
cabecera.imprimirCabecera();

const calculadora = new Calculadora();
console.log("La suma es de: " + calculadora.sumar(3, 4)); 
console.log("La resta es de: " + calculadora.restar(3, 4)); 
console.log("La multiplicacion es de: " + calculadora.multiplicar(3, 4)); 
console.log("La división es de: " + calculadora.dividir(3, 4)); 
console.log("La potencia es de: " + calculadora.potencia(3, 4)); 
console.log("El factorial es de: " + calculadora.factorial(4)); 

const cancion = new Cancion('D-Day', 'Rap');
cancion.setAutor('Min Yoongi');
cancion.mostrarDatos();

const cuenta = new Cuenta('Edward Cullen', 90, 'Ahorro', '12345');
cuenta.mostrarDatos();
cuenta.depositar(10);
cuenta.retirar(20);

const empleado = new Empleado('Alice', 'Cullen', 'Calle Imposible 0903', '0903-9307', 22, 2500);
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
    <h3>Marcela Menjívar</h3>
  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
