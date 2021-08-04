import { Component, OnInit } from '@angular/core';
import { Fraccion } from '../models/fraccion.interface';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	public pregunta1: Fraccion = new Fraccion();
	public pregunta2: Fraccion = new Fraccion();
	public arrayOpciones: Fraccion[] = [];
	public resultado: Fraccion;
	public swRespuesta = false;

	constructor() {
		this.pregunta1.crearPregunta();
		this.pregunta2.crearPregunta();
	}

	ngOnInit() {
		this.generarOpciones();
	}

	generarOpciones() {
		this.resultado = this.sumarFracciones(this.pregunta1, this.pregunta2);
		this.arrayOpciones.push(this.resultado);
		while (this.arrayOpciones.length < 4) {
			const auxFraccion = new Fraccion();
			if (!this.sonIguales(auxFraccion, this.resultado) && auxFraccion.denominador !== auxFraccion.numerador) {
				console.log(auxFraccion);
				this.arrayOpciones.push(auxFraccion);
			}
		}
	}

	sonIguales(fr1: Fraccion, fr2: Fraccion) {
		if (fr1.numerador === fr2.numerador && fr1.denominador === fr2.denominador) {
			return true;
		}
		return false;
	}

	sumarFracciones(fr1: Fraccion, fr2: Fraccion): Fraccion {
		const DENOMINADOR = fr1.denominador * fr2.denominador;
		const NUMERADOR = (DENOMINADOR / fr1.denominador) * fr1.numerador + (DENOMINADOR / fr2.denominador) * fr2.numerador;
		const fraccion = new Fraccion();
		fraccion.denominador = DENOMINADOR;
		fraccion.numerador = NUMERADOR;
		fraccion.simplificar();
		return fraccion;
	}

	verificaRespuesta(fr: Fraccion) {
		if (fr.denominador === this.resultado.denominador && fr.numerador === this.resultado.numerador) {
			this.swRespuesta = true;
		} else {
			this.swRespuesta = false;
		}
	}
}
