import { Component, OnInit } from '@angular/core';
import { Fraccion } from '../models/fraccion.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public fraccion: Fraccion;
  public resultado1: Fraccion;
  public resultado2: Fraccion;
  public resultado3: Fraccion;
  public resultado4: Fraccion;
  public principal: Fraccion;
  constructor() {}
  ngOnInit() {
    this.resultado1 = new Fraccion();
    this.resultado2 = new Fraccion();
    this.resultado3 = new Fraccion();
    this.resultado4 = new Fraccion();
    this.principal = new Fraccion();
    this.principal = this.verificar(this.resultado1, this.resultado2);
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
    console.log('denominador: ', resD, 'numerador: ', resN);
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
}
