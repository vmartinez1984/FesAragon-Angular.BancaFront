import { Component } from '@angular/core';
import { ClienteDto } from 'src/app/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-de-clientes',
  templateUrl: './lista-de-clientes.component.html',
  styleUrls: ['./lista-de-clientes.component.css']
})
export class ListaDeClientesComponent {
  clientes: ClienteDto[] = []

  constructor(private servicio: ClienteService) {
    this.obtenerClientes()
  }

  obtenerClientes() {
    this.servicio.obtenerTodos().subscribe({
      next: (clientes) => {
        this.clientes = clientes
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
