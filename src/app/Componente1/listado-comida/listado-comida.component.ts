import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-comida',
  templateUrl: './listado-comida.component.html',
  styleUrls: ['./listado-comida.component.css']
})
export class ListadoComidaComponent  {

  comida:string[]=["comida1","comida2","comida3","comida3","comida5"];
  BorarComida:string|undefined="";
  borrarComida(){

    this.comida.splice(0,this.comida.length);



  }

}
