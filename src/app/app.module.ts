import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioDeClienteComponent } from './components/clientes/formulario-de-cliente/formulario-de-cliente.component';
import { ListaDeClientesComponent } from './components/clientes/lista-de-clientes/lista-de-clientes.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { ListaDeAhorrosComponent } from './components/ahorros/lista-de-ahorros/lista-de-ahorros.component';
import { FormularioDeAhorrosComponent } from './components/ahorros/formulario-de-ahorros/formulario-de-ahorros.component';
import { AgregarAhorroComponent } from './components/ahorros/agregar-ahorro/agregar-ahorro.component';
import { DetallesDeAhorroComponent } from './components/ahorros/detalles-de-ahorro/detalles-de-ahorro.component';
import { FormularioDeMovimientoDeAhorroComponent } from './components/ahorros/formulario-de-movimiento-de-ahorro/formulario-de-movimiento-de-ahorro.component';
import { RetiroDeAhorroComponent } from './components/ahorros/retiro-de-ahorro/retiro-de-ahorro.component';
import { DepositoDeAhorroComponent } from './components/ahorros/deposito-de-ahorro/deposito-de-ahorro.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioDeClienteComponent,
    ListaDeClientesComponent,
    AgregarClienteComponent,
    ListaDeAhorrosComponent,
    FormularioDeAhorrosComponent,
    AgregarAhorroComponent,
    DetallesDeAhorroComponent,
    FormularioDeMovimientoDeAhorroComponent,
    RetiroDeAhorroComponent,
    DepositoDeAhorroComponent
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
