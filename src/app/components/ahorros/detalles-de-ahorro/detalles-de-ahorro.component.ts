import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ahorro } from 'src/app/interfaces/ahorro';
import { AhorroService } from 'src/app/services/ahorro.service';

@Component({
  selector: 'app-detalles-de-ahorro',
  templateUrl: './detalles-de-ahorro.component.html',
  styleUrls: ['./detalles-de-ahorro.component.css']
})
export class DetallesDeAhorroComponent {
  ahorro?: Ahorro
  constructor(private servicioDeAhorros: AhorroService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      (data) => {
        //console.log(data)
        this.obtenerAhorro(data['ahorroId'])
      }
    )
  }

  obtenerAhorro(ahorroId: any) {
    this.servicioDeAhorros.obtenerPorId(ahorroId).subscribe({
      next: (data) => {
        //console.log(data)
        this.ahorro = data
      }
    })
  }
}
