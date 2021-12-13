import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-borrar-dia',
  templateUrl: './borrar-dia.component.html',
  styles: [
  ]
})
export class BorrarDiaComponent implements OnInit, OnChanges {
@Input()
dias!:string[];
  constructor() { }
  ngOnInit(): void {
    console.log("Inicializado")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("borrar");
  }


  }



