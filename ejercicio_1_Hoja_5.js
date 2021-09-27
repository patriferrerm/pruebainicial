class Dni{
    constructor(numeroDNI){
        this._numeroDNI = numeroDNI;
        this._letraDNI= this.calcularLetra();
    }

    get numeroDNI(){
        return this._numeroDNI;
    }

    set numeroDNI(nuevoNumeroDNI){
        this._numeroDNI= nuevoNumeroDNI;
        this._letraDNI = this.calcularLetra();
    }

    get letraDNI(){
        return this._letraDNI;
    }

    calcularLetra(numeroDNI){
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
        'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
        return letras[this._numeroDNI%23];
    }
        
    mostrar(){
        return `${this._numeroDNI} - ${this.letraDNI}`;
    }
}

let patriDNI = new Dni(53383020);
console.log (patriDNI.mostrar());

