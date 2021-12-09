import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-flores',
  templateUrl: './listado-flores.component.html',
  styleUrls: ['./listado-flores.component.css']
})
export class ListadoFloresComponent  {

  flores:string[]=["flor1","flor2","flor3","flor4","flor5"];
  BorarFlor:string|undefined="";
  borrarflor(){

    this.flores.splice(0,this.flores.length);


  }

  }


