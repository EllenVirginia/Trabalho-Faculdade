import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {

  corDeFundo ='red';
  fonte = "White";

  setCorFonte(){
    if(this.corDeFundo == "red" && this.fonte == "White"){
      this.fonte = "Black"
      this.corDeFundo = "green"
    } else {
      this.corDeFundo = "red"
      this.fonte = "White"
    }
  }


  fontFamily=''
  setFontFamily(value: string){
    this.fontFamily=value
  }
  
}
