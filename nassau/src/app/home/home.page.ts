import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  //exemplo 1
  guardaTexto = ''
  imprime(value: string){
    this.guardaTexto = value
  }

  //exemplo 2
  guardaTema = 'tema1'
  mudaTema(value: string){
    this.guardaTema = value
  }
 //exemplo 3
 guardaCor = ""
 mudaCor(value:string){
  this.guardaCor = value
 }

 guardaFonte = ""
 mudaFonte(value:string){
  this.guardaFonte = value
 }

 guardaTamanho = ""
 mudaTamanho(value:string){
  this.guardaTamanho = value
 }

}
