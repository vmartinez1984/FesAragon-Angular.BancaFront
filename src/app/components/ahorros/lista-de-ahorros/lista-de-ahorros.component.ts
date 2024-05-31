import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteDto } from 'src/app/cliente';
import { Ahorro } from 'src/app/interfaces/ahorro';
import { AhorroService } from 'src/app/services/ahorro.service';

@Component({
  selector: 'app-lista-de-ahorros',
  templateUrl: './lista-de-ahorros.component.html',
  styleUrls: ['./lista-de-ahorros.component.css']
})
export class ListaDeAhorrosComponent {
  ahorros: Ahorro[] = []
  clienteId: string = ''
  clienteNombreCompleto: string = ''
  //cliente?: ClienteDto

  constructor(private service: AhorroService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((data) => {
      //console.log(data)
      this.clienteNombreCompleto = data['nombre'] + ' ' + data['apellidos']     
      if(this.clienteNombreCompleto)   
        this.clienteNombreCompleto = data['clienteNombreCompleto']
    })
    this.activatedRoute.params.subscribe((data) => {
      //console.log(data)            
      this.obtenerTodosLosAhorros(data['clienteId'])
      this.clienteId = data['clienteId']
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
