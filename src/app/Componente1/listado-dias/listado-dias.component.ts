import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-listado-dias',
  templateUrl: './listado-dias.component.html',
  styleUrls: ['./listado-dias.component.css']
})
export class ListadoDiasComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  dias:string[]=["Lunes","Martes","Mier","Jueves","Viernes","Sabado","Domingo"];
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }


  BorarDias:string|undefined="";
  borrarDias(){

   this.BorarDias=this.dias.pop();


  }

}
