import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alerta } from 'src/app/helpers/alerta';
import { Guid } from 'src/app/helpers/guid';
import { MovimientoDtoIn } from 'src/app/interfaces/ahorro';
import { AhorroService } from 'src/app/services/ahorro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito-de-ahorro',
  templateUrl: './deposito-de-ahorro.component.html',
  styleUrls: ['./deposito-de-ahorro.component.css']
})
export class DepositoDeAhorroComponent {
  ahorroId: string = ''
  constructor(
    private servicioDeAhorro: AhorroService, private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data)
      this.ahorroId = data['ahorroId']
    })
  }

  depositar(movimiento: MovimientoDtoIn) {
    movimiento.id = Guid.newGuid()
    console.log(movimiento)
    this.servicioDeAhorro.depositar(this.ahorroId, movimiento).subscribe({
      next: (data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deposito realizado, $" + movimiento.cantidad,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['ahorros', this.ahorroId])
      },
      error: (data) => {
        Alerta.error()
      }
    })
  }
}
