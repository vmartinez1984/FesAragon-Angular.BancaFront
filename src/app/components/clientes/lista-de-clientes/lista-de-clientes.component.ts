import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteDto } from 'src/app/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-de-clientes',
  templateUrl: './lista-de-clientes.component.html',
  styleUrls: ['./lista-de-clientes.component.css']
})
export class ListaDeClientesComponent {
  clientes: ClienteDto[] = []  
  estaCargando = false

  constructor(private servicio: ClienteService) {
    this.obtenerClientes()
  }

  obtenerClientes() {
    this.estaCargando = true
    this.servicio.obtenerTodos().subscribe({
      next: (clientes) => {
        this.clientes = clientes
        this.estaCargando = false
      },
      error: (error) => {
        alert("Ocurrio un error")
        console.log(error)
      }
    })
  }
}
