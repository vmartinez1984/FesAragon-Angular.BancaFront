import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteDto } from 'src/app/cliente';
import { Ahorro } from 'src/app/interfaces/ahorro';
import { AhorroService } from 'src/app/services/ahorro.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-de-ahorros',
  templateUrl: './lista-de-ahorros.component.html',
  styleUrls: ['./lista-de-ahorros.component.css']
})
export class ListaDeAhorrosComponent {
  ahorros: Ahorro[] = []
  clienteId: string = ''
  cliente?: ClienteDto

  constructor(
    private service: AhorroService,
    private servicioDeClientes: ClienteService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((data) => {
      //console.log(data)            
      this.obtenerTodosLosAhorros(data['clienteId'])
      this.clienteId = data['clienteId']
      this.obtenerCliente(this.clienteId)
    })
  }

  obtenerCliente(clienteId: string) {
    this.servicioDeClientes.obtenerPorId(clienteId).subscribe({
      next: (data) => {
        this.cliente = data
      }
    })
  }

  obtenerTodosLosAhorros(clienteId: string) {
    this.service.obtenerTodosPorClienteId(clienteId).subscribe({
      next: (data) => {
        this.ahorros = data
      },
      error: (data) => {
        alert("Valio pepino :(")
        console.log(data)
      }
    })
  }
}
