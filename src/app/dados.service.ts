import { Injectable } from '@angular/core';

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
