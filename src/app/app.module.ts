import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './Componente1/listado/listado.component';
import { ListadoDiasComponent } from './Componente1/listado-dias/listado-dias.component';
import { ListadoFloresComponent } from './Componente1/listado-flores/listado-flores.component';
import { ListadoComidaComponent } from './Componente1/listado-comida/listado-comida.component';
import { ListadoCuidadesComponent } from './Componente1/listado-cuidades/listado-cuidades.component';
import { Service } from './service/ser.service';
import { FormsModule } from '@angular/forms';
import { BorrarDiaComponent } from './componente1/borrar-dia/borrar-dia.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    ListadoDiasComponent,
    ListadoFloresComponent,
    ListadoComidaComponent,
    ListadoCuidadesComponent,
    BorrarDiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
