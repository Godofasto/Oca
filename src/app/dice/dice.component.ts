import { Component } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  
  tirarDado(maxim: number){
    var valorDado = Math.floor(Math.random() * maxim)
  }
  resultadoDado(){
    console.log(this.tirarDado(6))
  } 
}
