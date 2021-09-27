class Persona{
  
    constructor(nombre, primerApellido, fechaNacimiento){
        this._nombre = nombre;
        this._primerApellido = primerApellido;
        this._fechaNacimiento = new Date(fechaNacimiento);
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombreNuevo){
        this._nombre = nombreNuevo;
    }

    get primerApellido(){
        return this._primerApellido;
    }

    set primerApellido(nuevoPrimerApellido){
        this._primerApellido = nuevoPrimerApellido;
    }

    get fechaNacimiento(){
        return this._fechaNacimiento;
    }

    set fechaNacimiento(nuevaFecha){
        this._fechaNacimiento = nuevaFecha;
    }

    saluda(){
        console.log(`Hola, soy ${this.nombre} ${this.primerApellido} `);
    }
    despidete(){
        console.log(`Adeu!`);
    }
  
    calculaEdad(){
        let edad;
        const fechaActual = new Date(Date.now());
        edad= fechaActual.getFullYear()-this._fechaNacimiento.getFullYear();
        if((fechaActual.getMonth()-this._fechaNacimiento.getMonth()<0) || (fechaActual.getMonth()=this._fechaNacimiento.getMonth() && fechaActual.getDay()-this._fechaNacimiento.getDay()<0))edad-1;
        return edad;
       
    }
}
 
const patri = new Persona("Patri","Ferrer", "10/02/1987");
console.log(patri.calculaEdad());

export {Persona};
