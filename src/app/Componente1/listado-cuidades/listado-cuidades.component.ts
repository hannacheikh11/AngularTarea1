import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-cuidades',
  templateUrl: './listado-cuidades.component.html',
  styleUrls: ['./listado-cuidades.component.css']
})
export class ListadoCuidadesComponent  {


  city:string[] = [];
  ciudadBorrada: any = "";
  ciudadesBorradas:string[] = [];

  mostrarLista() {
   this.city = ["Vigo", "Malaga", "Cortoba", "Valencia", "Huelva", "Saragoza"];
  }

  borrar() {
    this.ciudadBorrada = this.city.pop();
    this.ciudadesBorradas.push(this.ciudadBorrada);
  }


}
