import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']

})
export class ListadoComponent  {

  meses:string[]=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto"];
  BorarMes:string|undefined="";
  borrarElemneto(){

   this.BorarMes=this.meses.pop();

  }


}
