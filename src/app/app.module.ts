import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './Componente1/listado/listado.component';
import { ListadoDiasComponent } from './Componente1/listado-dias/listado-dias.component';
import { ListadoFloresComponent } from './Componente1/listado-flores/listado-flores.component';
import { ListadoComidaComponent } from './Componente1/listado-comida/listado-comida.component';
import { ListadoCuidadesComponent } from './Componente1/listado-cuidades/listado-cuidades.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    ListadoDiasComponent,
    ListadoFloresComponent,
    ListadoComidaComponent,
    ListadoCuidadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
