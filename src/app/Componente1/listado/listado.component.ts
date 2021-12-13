import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/ser.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']

})
export class ListadoComponent   {

 // meses:string[]=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto"];

 constructor(private service:Service){

 }
 meses:string[]=this.service.meses;
 //BorarMes:string|undefined="";
 get borrarElemneto(){

   return this.service.meses.pop();

  }



}
