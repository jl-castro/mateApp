export class Fraccion {
  numerador: number;
  denominador: number;
  constructor() {
    this.numerador = Math.round(Math.random() * 9) + 1;
    this.denominador = Math.round(Math.random() * 9) + 1;
  }
  mostrar() {
    console.log('num: ', this.numerador);
    console.log('dem: ', this.denominador);
  }
}
