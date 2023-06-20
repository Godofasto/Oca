import { Component } from '@angular/core';
import { DadosService } from '../dados.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor(private Dadosservice: DadosService) { }
  posicion1: number = 1;
  posicion2: number = 1;
  eventos1 = []
  eventos2 = [];
  contadorPosada: number = 0
  resultadoDado: number = 1;
  turnoPrimero = true;

  finalizarJuego(){
    this.posicion1 = 1;
    this.posicion2 = 1;
    this.eventos1 = [];
    this.eventos2 = [];
  }

  moverFicha1() {
    this.resultadoDado = this.Dadosservice.tirarDado();
    var nuevaPosicion = this.resultadoDado + this.posicion1
    this.posicion1 = nuevaPosicion;
    console.log('Dado 1:')
    console.log(this.resultadoDado);
    console.log('Posicion 1:')
    console.log(this.posicion1);
    this.comprobarCasilla();
  }
  moverFicha2() {
    this.resultadoDado = this.Dadosservice.tirarDado();
    var nuevaPosicion2 = this.resultadoDado + this.posicion2;
    this.posicion2 = nuevaPosicion2;
    console.log('Dado 2:')
    console.log(this.resultadoDado);
    console.log('Posicion 2:')
    console.log(this.posicion2);
    this.comprobarCasilla();
  }
  moverFicha1SinComprobar() {
    // this.resultadoDado = this.Dadosservice.tirarDado();
    var nuevaPosicion = this.resultadoDado + this.posicion1
    this.posicion1 = nuevaPosicion;
    console.log('Dado 1:')
    console.log(this.resultadoDado);
    console.log('Posicion 1:')
    console.log(this.posicion1);
  }
  moverFicha2SinComprobar() {
    this.resultadoDado = 2;
    var nuevaPosicion2 = this.resultadoDado + this.posicion2;
    this.posicion2 = nuevaPosicion2;
    console.log('Dado 2:')
    console.log(this.resultadoDado);
    console.log('Posicion 2:')
    console.log(this.posicion2);
  }
  turnos() {
    // this.reiniciarContadorPosada();
    if (this.turnoPrimero == true) {
      this.moverFicha1();
      this.turnoPrimero = false;
      console.log(this.turnoPrimero);
    } else {
      this.moverFicha2();
      this.turnoPrimero = true;
    }
    this.reiniciarContadorPosada();
  }
  getFicha1Class(): string {
    return 'c' + this.posicion1;
  }
  getFicha2Class(): string {
    return 'c' + this.posicion2 + '_2'
  }
  reiniciarContadorPosada() {
    this.contadorPosada = 0;
  }
  comprobarCasilla() {
    //OCAS//
    if (this.posicion1 == 5) {
      this.eventos1.push('Oca de jugador 1 de 5 a 9');
      console.log("Oca de jugador 1 de 5 a 9")
      this.posicion1 = 9;
      this.moverFicha1();
    } else if (this.posicion1 == 9) {
      this.eventos1.push('Oca de jugador 1 de 9 a 14');
      console.log("Oca de jugador 1 de 9 a 14")
      this.posicion1 = 14;
      this.moverFicha1();
    } else if (this.posicion1 == 14) {
      this.eventos1.push('Oca de jugador 1 de 14 a 18');
      console.log("Oca de jugador 1 de 14 a 18")
      this.posicion1 = 18;
      this.moverFicha1();
    } else if (this.posicion1 == 18) {
      this.eventos1.push("Oca de jugador 1 de 18 a 23");
      console.log("Oca de jugador 1 de 18 a 23")
      this.posicion1 = 23;
      this.moverFicha1();
    } else if (this.posicion1 == 23) {
      this.eventos1.push("Oca de jugador 1 de 23 a 27");
      console.log("Oca de jugador 1 de 23 a 27")
      this.posicion1 = 27;
      this.moverFicha1();
    } else if (this.posicion1 == 27) {
      this.eventos1.push("Oca de jugador 1 de 27 a 32");
      console.log("Oca de jugador 1 de 27 a 32")
      this.posicion1 = 32;
      this.moverFicha1();
    } else if (this.posicion1 == 32) {
      this.eventos1.push("Oca de jugador 1 de 32 a 36");
      console.log("Oca de jugador 1 de 32 a 36")
      this.posicion1 = 36;
      this.moverFicha1();
    } else if (this.posicion1 == 36) {
      this.eventos1.push("Oca de jugador 1 de 36 a 41");
      console.log("Oca de jugador 1 de 36 a 41")
      this.posicion1 = 41;
      this.moverFicha1();
    } else if (this.posicion1 == 41) {
      this.eventos1.push("Oca de jugador 1 de 41 a 45");
      console.log("Oca de jugador 1 de 41 a 45")
      this.posicion1 = 45;
      this.moverFicha1();
    } else if (this.posicion1 == 45) {
      this.eventos1.push("Oca de jugador 1 de 45 a 50");
      console.log("Oca de jugador 1 de 45 a 50")
      this.posicion1 = 50;
      this.moverFicha1();
    } else if (this.posicion1 == 50) {
      this.eventos1.push("Oca de jugador 1 de 50 a 54");
      console.log("Oca de jugador 1 de 50 a 54")
      this.posicion1 = 54;
      this.moverFicha1();
    } else if (this.posicion1 == 54) {
      this.eventos1.push("Oca de jugador 1 de 54 a 59");
      console.log("Oca de jugador 1 de 54 a 59")
      this.posicion1 = 59;
      this.moverFicha1();
    } else if (this.posicion2 == 5) {
      this.eventos2.push("Oca de jugador 2 de 5 a 9");
      console.log("Oca de jugador 2 de 5 a 9")
      this.posicion2 = 9;
      this.moverFicha2();
    } else if (this.posicion2 == 9) {
      this.eventos2.push("Oca de jugador 2 de 9 a 14");
      console.log("Oca de jugador 2 de 9 a 14")
      this.posicion2 = 14;
      this.moverFicha2();
    } else if (this.posicion2 == 14) {
      this.eventos2.push("Oca de jugador 2 de 14 a 18");
      console.log("Oca de jugador 2 de 14 a 18")
      this.posicion2 = 18;
      this.moverFicha2();
    } else if (this.posicion2 == 18) {
      this.eventos2.push("Oca de jugador 2 de 18 a 23");
      console.log("Oca de jugador 2 de 18 a 23")
      this.posicion2 = 23;
      this.moverFicha2();
    } else if (this.posicion2 == 23) {
      this.eventos2.push("Oca de jugador 2 de 23 a 27");
      console.log("Oca de jugador 2 de 23 a 27")
      this.posicion2 = 27;
      this.moverFicha2();
    } else if (this.posicion2 == 27) {
      this.eventos2.push("Oca de jugador 2 de 27 a 32");
      console.log("Oca de jugador 2 de 27 a 32")
      this.posicion2 = 32;
      this.moverFicha2();
    } else if (this.posicion2 == 32) {
      this.eventos2.push("Oca de jugador 2 de 32 a 36");
      console.log("Oca de jugador 2 de 32 a 36")
      this.posicion2 = 36;
      this.moverFicha2();
    } else if (this.posicion2 == 36) {
      this.eventos2.push("Oca de jugador 2 de 36 a 41");
      console.log("Oca de jugador 2 de 36 a 41")
      this.posicion2 = 41;
      this.moverFicha2();
    } else if (this.posicion2 == 41) {
      this.eventos2.push("Oca de jugador 2 de 41 a 45");
      console.log("Oca de jugador 2 de 41 a 45")
      this.posicion2 = 45;
      this.moverFicha2();
    } else if (this.posicion2 == 45) {
      this.eventos2.push("Oca de jugador 2 de 45 a 50");
      console.log("Oca de jugador 2 de 45 a 50")
      this.posicion2 = 50;
      this.moverFicha2();
    } else if (this.posicion2 == 50) {
      this.eventos2.push("Oca de jugador 2 de 50 a 54");
      console.log("Oca de jugador 2 de 50 a 54")
      this.posicion2 = 54;
      this.moverFicha2();
    } else if (this.posicion2 == 54) {
      this.eventos2.push("Oca de jugador 2 de 54 a 59");
      console.log("Oca de jugador 2 de 54 a 59")
      this.posicion2 = 59;
      this.moverFicha2();
    }
    //FIN OCAS//
    //PUENTES//
    else if (this.posicion1 == 6) {
      this.eventos1.push("Puente de jugador 1 de 6 a 12")
      console.log('Puente de jugador 1 de 6 a 12');
      this.posicion1 = 12;
      this.moverFicha1();
    } else if (this.posicion1 == 12) {
      this.eventos1.push("Puente de jugador 1 de 12 a 6")
      console.log('Puente de jugador 1 de 12 a 6');
      this.posicion1 = 6;
      this.moverFicha1();
    } else if (this.posicion2 == 6) {
      this.eventos2.push("Puente de jugador 2 de 6 a 12")
      console.log('Puente de jugador 2 de 6 a 12');
      this.posicion2 = 12;
      this.moverFicha2();
    } else if (this.posicion2 == 12) {
      this.eventos2.push("Puente de jugador 2 de 12 a 6")
      console.log('Puente de jugador 2 de 12 a 6');
      this.posicion2 = 6;
      this.moverFicha2();
    }
    //FIN PUENTES//
    //POSADA//
    else if (this.posicion1 == 19) {
      // this.moverFicha2(); //Esto falla porque la primera llamada se hace infinito
      // this.moverFicha2();
      // this.moverFicha2();
      // this.moverFicha1();
      this.eventos1.push("El jugador 1 está en la posada, 2 turnos sin moverse");
      for (let i = 0; i < 2; i++) { //Se mueve una vez automaticamente y luego tu movimiento con el boton
        console.log(i);
        console.log('El jugador 1 ha caido en la posada, 2 turnos sin moverse')
        this.contadorPosada = this.contadorPosada + 1;
        this.moverFicha2SinComprobar();

      }
    } else if (this.posicion2 == 19) {
      this.eventos2.push("El jugador 2 está en la posada, 2 turnos sin moverse");
      for (let i = 0; i < 2; i++) {
        console.log('El jugador 2 ha caido en la posada, 2 turnos sin moverse')
        this.contadorPosada = this.contadorPosada + 1;
        this.moverFicha1SinComprobar();

      }
    }
    else if (this.posicion1 == 31) {
      // this.moverFicha2(); //Esto falla porque la primera llamada se hace infinito
      // this.moverFicha2();
      // this.moverFicha2();
      // this.moverFicha1();
      this.eventos1.push("El jugador 1 ha caido en el pozo, 2 turnos sin moverse");
      for (let i = 0; i < 2; i++) { //Se mueve una vez automaticamente y luego tu movimiento con el boton
        console.log(i);
        console.log('El jugador 1 ha caido en el pozo, 2 turnos sin moverse')
        this.contadorPosada = this.contadorPosada + 1;
        this.moverFicha2SinComprobar();

      }
    } else if (this.posicion2 == 31) {
      this.eventos2.push("El jugador 2 ha caido en el pozo, 2 turnos sin moverse");
      for (let i = 0; i < 2; i++) {
        console.log('El jugador 2 ha caido en el pozo, 2 turnos sin moverse')
        this.contadorPosada = this.contadorPosada + 1;
        this.moverFicha1SinComprobar();

      }
    }
    else if (this.posicion1 == 52) {
      // this.moverFicha2(); //Esto falla porque la primera llamada se hace infinito
      // this.moverFicha2();
      // this.moverFicha2();
      // this.moverFicha1();
      this.eventos1.push("El jugador 1 está en la carcel, 3 turnos sin moverse");
      for (let i = 0; i < 3; i++) { //Se mueve una vez automaticamente y luego tu movimiento con el boton
        console.log(i);
        console.log('El jugador 1 ha caido en la carcel, 3 turnos sin moverse')
        this.contadorPosada = this.contadorPosada + 1;
        this.moverFicha2SinComprobar();

      }
    } else if (this.posicion2 == 52) {
      this.eventos2.push("El jugador 2 está en la carcel, 3 turnos sin moverse");
      for (let i = 0; i < 3; i++) {
        console.log('El jugador 2 ha caido en la carcel, 3 turnos sin moverse')
        this.contadorPosada = this.contadorPosada + 1;
        this.moverFicha1SinComprobar();

      }
    }
    else if (this.posicion1 == 42) {
      this.posicion1 = 30;
      this.eventos1.push("El jugador 1 está en el laberinto, volvera a la casilla 30");
      console.log("El jugador 1 ha caido en el laberinto, volverá a la posición 30");
    } else if (this.posicion2 == 42) {
      this.eventos2.push("El jugador 2 está en el laberinto, volvera a la casilla 30");
      this.posicion2 = 30
      console.log("El jugador 2 ha caido en el laberinto, volverá a la posición 30");
    }
    else if (this.posicion1 == 58) {
      this.posicion1 = 1;
      this.eventos1.push("El jugador 1 ha muerto, volvera a la casilla 1");
      console.log("El jugador 1 ha sido condenado a muerte, volverá a la posición 1");
    } else if (this.posicion2 == 58) {
      this.posicion2 = 1;
      this.eventos2.push("El jugador 2 ha muerto, volvera a la casilla 2");
      console.log("El jugador 2 ha sido condenado a muerte, volverá a la posición 1");
    }
    //Comprobar Victoria//
    else if(this.posicion1 > 63){
      var calculo = this.posicion1 - 63;
      this.posicion1 = 63 - calculo;
    }
    else if(this.posicion2 > 63){
      var calculo = this.posicion2 - 63;
      this.posicion2 = 63 - calculo;
    }else if(this.posicion1 == 63){
      this.finalizarJuego();
      this.eventos1.push("Victoria para el jugador 1")
      this.eventos2.push("Victoria para el jugador 1");
    }else if(this.posicion2 == 63){
      this.finalizarJuego();
      this.eventos1.push("Victoria para el jugador 2");
      this.eventos2.push("Victoria para el jugador 2");
    }
  }

}
