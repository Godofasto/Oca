import { Injectable } from '@angular/core';
import { DiceComponent } from './dice/dice.component';
@Injectable({
  providedIn: 'root'
})
export class DadosService {
  tirarDado(){
    var valorDado = Math.floor(Math.random() * 6)+1
    return valorDado
  }
  constructor() { }
}
