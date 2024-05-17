import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeClientesComponent } from './components/clientes/lista-de-clientes/lista-de-clientes.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';

const routes: Routes = [
  { path: "", component: ListaDeClientesComponent },
  { path: "clientes", component: ListaDeClientesComponent },
  { path: "clientes/agregar", component: AgregarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
