import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioDeClienteComponent } from './components/clientes/formulario-de-cliente/formulario-de-cliente.component';
import { ListaDeClientesComponent } from './components/clientes/lista-de-clientes/lista-de-clientes.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioDeClienteComponent,
    ListaDeClientesComponent,
    AgregarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
