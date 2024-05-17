import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteDtoIn } from 'src/app/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {

  constructor(private service: ClienteService, private ruoted: Router) { }

  agregar(cliente: ClienteDtoIn) {
    this.service.agregar(cliente).subscribe({
      next: (data) => {
        this.ruoted.navigateByUrl("clientes")
      },
      error: (data) => {
        console.log(data)
      }
    })
  }

}
