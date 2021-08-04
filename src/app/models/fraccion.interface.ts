export class Fraccion {
	public numerador: number;
	public denominador: number;

	constructor() {
		this.numerador = Math.round(Math.random() * 49) + 1;
		this.denominador = Math.round(Math.random() * 49) + 1;
		this.simplificar();
	}

	crearPregunta() {
		this.numerador = Math.round(Math.random() * 9) + 1;
		this.denominador = Math.round(Math.random() * 9) + 1;
		this.simplificar();
	}

	mostrar() {
		console.log('num: ', this.numerador);
		console.log('dem: ', this.denominador);
	}

	simplificar() {
		let hayMultiplos = true;
		while (hayMultiplos && this.denominador !== 1 && this.numerador !== 1) {
			if (this.numerador % this.denominador === 0) {
				this.numerador /= this.denominador;
				this.denominador /= this.denominador;
			} else if (this.denominador % this.numerador === 0) {
				this.numerador /= this.numerador;
				this.denominador /= this.numerador;
			} else {
				hayMultiplos = false;
			}
			this.simplificarDoble();
		}
	}

	simplificarDoble() {
		let hayMultiplos = true;
		while (hayMultiplos) {
			if (this.numerador % 2 === 0 && this.denominador % 2 === 0) {
				this.numerador /= 2;
				this.denominador /= 2;
			} else if (this.numerador % 3 === 0 && this.denominador % 3 === 0) {
				this.numerador /= 3;
				this.denominador /= 3;
			} else if (this.numerador % 5 === 0 && this.denominador % 5 === 0) {
				this.numerador /= 5;
				this.denominador /= 5;
			} else {
				hayMultiplos = false;
			}
		}
	}
}
