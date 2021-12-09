import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-dias',
  templateUrl: './listado-dias.component.html',
  styleUrls: ['./listado-dias.component.css']
})
export class ListadoDiasComponent  {

  dias:string[]=["Lunes","Martes","Mier","Jueves","Viernes","Sabado","Domingo"];
  BorarDias:string|undefined="";
  borrarDias(){

   this.BorarDias=this.dias.pop();


  }

}
