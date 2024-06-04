import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alerta } from 'src/app/helpers/alerta';
import { Guid } from 'src/app/helpers/guid';
import { MovimientoDtoIn } from 'src/app/interfaces/ahorro';
import { AhorroService } from 'src/app/services/ahorro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retiro-de-ahorro',
  templateUrl: './retiro-de-ahorro.component.html',
  styleUrls: ['./retiro-de-ahorro.component.css']
})
export class RetiroDeAhorroComponent {
  ahorroId: string = ''
  constructor(
    private servicioDeAhorro: AhorroService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data)
      this.ahorroId = data['ahorroId']
    })
  }

  retirar(movimiento: MovimientoDtoIn) {
    movimiento.id = Guid.newGuid()
    console.log(movimiento)
    this.servicioDeAhorro.retirar(this.ahorroId, movimiento).subscribe({
      next: (data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Retiro realizado, $" + movimiento.cantidad,
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