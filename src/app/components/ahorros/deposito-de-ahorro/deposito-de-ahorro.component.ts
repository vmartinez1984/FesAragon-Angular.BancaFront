import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'src/app/helpers/guid';
import { MovimientoDtoIn } from 'src/app/interfaces/ahorro';
import { AhorroService } from 'src/app/services/ahorro.service';

@Component({
  selector: 'app-deposito-de-ahorro',
  templateUrl: './deposito-de-ahorro.component.html',
  styleUrls: ['./deposito-de-ahorro.component.css']
})
export class DepositoDeAhorroComponent {
  ahorroId: string =''
  constructor(private servicioDeAhorro: AhorroService, private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((data) => {
      console.log(data)
      this.ahorroId = data['ahorroId']
    })
  }

  depositar(movimiento: MovimientoDtoIn){
    movimiento.id = Guid.newGuid()
    console.log(movimiento)
    this.servicioDeAhorro.depositar(this.ahorroId, movimiento).subscribe({
      next:(data)=>{

      }
    })
  }
}
