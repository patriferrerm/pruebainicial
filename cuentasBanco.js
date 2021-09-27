import {Persona} from './Persona.js';

class Cuenta{
    constructor(titular, cantidad){
        this._titular = titular;
        this._cantidad = cantidad;
    }

    get titular(){
        return this._titular;
    }
    set titular(nuevoTitular){
        this._titular = nuevoTitular;
    }

    get cantidad(){
        return this._cantidad;
    }
    set cantidad(nuevaCantidad){
        this._cantidad = nuevaCantidad;
    }

    mostrar(){
        const cuentaImprimir = `Nombre: ${this._titular.nombre}\nApellido: ${this._titular.primerApellido}\nSaldo: ${this._cantidad}`;
        console.log(cuentaImprimir);
    }

    ingresar(cantidadAIngresar){
        if (cantidadAIngresar>0) this._cantidad +=cantidadAIngresar;
    }

    retirar(cantidadARetirar){
        this._cantidad-=cantidadARetirar;
    }    
}

class CuentaExpansion extends Cuenta{
    constructor(titular, cantidad, minimoIngresoMensual){
        super(titular, cantidad);
        this._minimoIngresoMensual = minimoIngresoMensual;
    }
    get minimoIngresoMensual(){
        return this._minimoIngresoMensual;
    }
    set minimoIngresoMensual(nuevoMinimoIngresoMensual) {
        this._minimoIngresoMensual = nuevoMinimoIngresoMensual;
    }

    transferencia(numCuenta, cantidadATransferir){
        this.retirar(cantidadATransferir);
        console.log(`Se ha tranferido a la cuenta ${numCuenta} la cantidad ${cantidadATransferir}. El saldo actual es ${this._cantidad}.`);
    }
}

class CuentaPersonal extends Cuenta {

    transferencia(numCuenta, cantidadATransferir){
        this.retirar(cantidadATransferir+3);
        console.log(`Se ha tranferido a la cuenta ${numCuenta} la cantidad ${cantidadATransferir}. El saldo actual es ${this._cantidad}.`);
    }
}

class CuentaJoven extends Cuenta {
    constructor(titular, cantidad, bonificacion){
        super(titular,cantidad);
        this._bonificacion = bonificacion;
    }

    get bonificacion(){
        return this._bonificacion;
    }
    set bonificacion(nuevaBonificacion){
        this._bonificacion = nuevaBonificacion;
    }

    mostrar() {
        const cuentaImprimir = `Cuenta Joven \nNombre: ${this._titular.nombre}\nApellido: ${this._titular.primerApellido}\nSaldo: ${this._cantidad} \nBonificación ${this._cantidad*this._bonificacion}`;
        console.log(cuentaImprimir);
    }

    esTitularValido(){
       const edad = this._titular.calcularEdad();
       return (edad>=18 && edad<25);
    }

    retirar(cantidadARetirar){
        if (this.esTitularValido()) this._cantidad-=cantidadARetirar;
        else console.log(`No se puede retirar la cantidad, no es un titular válido.`)
    }


}



const fechaNacimientoEmi = new Date("06/14/1996");
const emi = new Persona("Emi", "Rima", fechaNacimientoEmi);
let cuentaEmi = new CuentaJoven(emi, 1000, 0.3);
console.log(`Es titular válido: ${cuentaEmi.esTitularValido()}`);

cuentaEmi.retirar(500);
cuentaEmi.mostrar();



