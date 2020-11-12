import { Component, OnInit } from '@angular/core';
import { Fraccion } from '../models/fraccion.interface';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	public fraccion: Fraccion;
	public resultado: Fraccion;
	public resultado1: Fraccion;
	public resultado2: Fraccion;
	public resultado3: Fraccion;
	public resultado4: Fraccion;
	public principal: Fraccion;
	public arrayFraccion: Fraccion[];
	constructor() {}
	ngOnInit() {
		this.generarFracciones();
	}
	mostrar() {
		this.fraccion = new Fraccion();
		this.fraccion.mostrar();
	}
	verificar(x: Fraccion, y: Fraccion): Fraccion {
		let resD = x.denominador * y.denominador;
		let resN =
			(resD / x.denominador) * x.numerador +
			(resD / y.denominador) * y.numerador;
		x.mostrar();
		y.mostrar();
		for (let i = 2; i < 7; i++) {
			if (resD % i === 0 && resN % i === 0) {
				resD /= i;
				resN /= i;
			}
		}
		const auxFraccion: Fraccion = new Fraccion();
		auxFraccion.numerador = resN;
		auxFraccion.denominador = resD;
		return auxFraccion;
	}
	generarFracciones() {
		this.arrayFraccion = [];
		for (let i = 0; this.arrayFraccion.length < 4; i++) {
			this.resultado = new Fraccion();
			if (!this.verificaIgualdad(this.arrayFraccion, this.resultado)) {
				if (this.resultado.denominador !== this.resultado.numerador) {
					this.arrayFraccion.push(this.resultado);
				}
			}
		}
	}

	verificaIgualdad(arr: Fraccion[], fr2: Fraccion) {
		for (const fr1 of arr) {
			if (
				fr1.numerador === fr2.numerador &&
				fr1.denominador === fr2.denominador
			) {
				return true;
			}
		}
		return false;
	}
}
