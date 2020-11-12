export class Fraccion {
	numerador: number;
	denominador: number;
	constructor() {
		this.numerador = Math.round(Math.random() * 9) + 1;
		this.denominador = Math.round(Math.random() * 9) + 1;
		this.simplificar();
	}
	mostrar() {
		console.log('num: ', this.numerador);
		console.log('dem: ', this.denominador);
	}
	simplificar() {
		let sw = true;
		while (sw) {
			if (this.denominador % 2 === 0 && this.numerador % 2 === 0) {
				this.denominador /= 2;
				this.numerador /= 2;
			} else {
				sw = false;
			}
		}
		sw = true;
		while (sw) {
			if (this.denominador % 3 === 0 && this.numerador % 3 === 0) {
				this.denominador /= 3;
				this.numerador /= 3;
			} else {
				sw = false;
			}
		}
		sw = true;
		while (sw) {
			if (this.denominador % 5 === 0 && this.numerador % 5 === 0) {
				this.denominador /= 5;
				this.numerador /= 5;
			} else {
				sw = false;
			}
		}
	}
}
