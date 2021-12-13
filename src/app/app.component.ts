import { Component, Input } from '@angular/core';
import { ListadoComponent } from './Componente1/listado/listado.component';
import { Service } from './service/ser.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<h1>hola desde component.ts</h1>
 // <ul>
  //  <li>tarea1</li>
  ////  <li>tarea2</li>
    //<li>tarea3</li>
    //<li>{{nombre}}</li>
 // </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@Input() meses:string[]=[];

  borrar:boolean=true;
  constructor(private service:Service){

  }

get borrarElemneto(){
  return this.service.meses;
}
}
