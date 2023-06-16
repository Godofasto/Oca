import { Component } from '@angular/core';
import { DadosService } from '../dados.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor(private Dadosservice:DadosService){}
  posicion1:number = 1;
  posicion2:number = 1;
  resultadoDado:number = 0;

  moverFicha(){
    this.resultadoDado = this.Dadosservice.tirarDado();
    var nuevaPosicion = this.resultadoDado + this.posicion1
    this.posicion1 = nuevaPosicion;
    console.log(this.posicion1);
  }
  getFichaClass(): string {
    return 'c'+this.posicion1;
  }
}
