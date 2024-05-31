import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeClientesComponent } from './components/clientes/lista-de-clientes/lista-de-clientes.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { ListaDeAhorrosComponent } from './components/ahorros/lista-de-ahorros/lista-de-ahorros.component';
import { AgregarAhorroComponent } from './components/ahorros/agregar-ahorro/agregar-ahorro.component';
import { DetallesDeAhorroComponent } from './components/ahorros/detalles-de-ahorro/detalles-de-ahorro.component';
import { RetiroDeAhorroComponent } from './components/ahorros/retiro-de-ahorro/retiro-de-ahorro.component';
import { DepositoDeAhorroComponent } from './components/ahorros/deposito-de-ahorro/deposito-de-ahorro.component';

const routes: Routes = [
  { path: "", component: ListaDeClientesComponent },
  { path: "clientes", component: ListaDeClientesComponent },
  { path: "clientes/agregar", component: AgregarClienteComponent },
  { path: "clientes/:clienteId/ahorros", component: ListaDeAhorrosComponent },
  { path: "clientes/:clienteId/ahorros/agregar", component: AgregarAhorroComponent },
  { path: "ahorros/:ahorroId", component: DetallesDeAhorroComponent },
  { path: "ahorros/:ahorroId/retiro", component: RetiroDeAhorroComponent },
  { path: "ahorros/:ahorroId/deposito", component: DepositoDeAhorroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
