import { Injectable } from "@angular/core";

@Injectable()
export class Service{

  private _meses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"];
  public get meses(): string[] {
    return this._meses;
  }
borarElementos(){
  this.meses.pop();

}

}
