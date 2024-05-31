import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AhorroDtoIn } from 'src/app/interfaces/ahorro'
import { Guid } from 'src/app/helpers/guid'
import { AhorroService } from 'src/app/services/ahorro.service'
import { ClienteService } from 'src/app/services/cliente.service'

@Component({
  selector: 'app-agregar-ahorro',
  templateUrl: './agregar-ahorro.component.html',
  styleUrls: ['./agregar-ahorro.component.css']
})

export class AgregarAhorroComponent {
  clienteNombreCompleto: string = ''
  ahorroDtoIn: AhorroDtoIn = { clienteNombre: '', clienteId: '', guid: Guid.newGuid(), interes: 0, nombre: '', nota: '' }

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: AhorroService,
    private router: Router,
    private servicioDeClientes : ClienteService
  ) {
    activatedRoute.queryParams.subscribe(data => {
      console.log(data)
      this.clienteNombreCompleto = data['clienteNombreCompleto']
      this.ahorroDtoIn.clienteNombre = data['clienteNombreCompleto']
      //console.log(this.clienteNombreCompleto)
    })
    this.activatedRoute.params.subscribe((data) => {
      console.log(data)
      this.ahorroDtoIn.clienteId = data['clienteId']
      //this.obtenetCliente(this.ahorroDtoIn.clienteId)
    })
  }

  obtenetCliente(clienteId: string) {
    this.servicioDeClientes.obtenerPorId(clienteId).subscribe({next:(data)=>{
      this.clienteNombreCompleto = data.nombre + " " + data.apellidos
    }})
  }

  agregar(ahorro: AhorroDtoIn) {
    console.log(ahorro)
    this.router.navigateByUrl('clientes/'+  this.ahorroDtoIn.clienteId + '/ahorros?clienteNombreCompleto=' + this.clienteNombreCompleto)
    this.servicio.agregar(this.ahorroDtoIn).subscribe({
      next:(data)=>{
      },
      error:(data)=>{
        alert("ocurrio un error")
        console.log(data)
      }
    })
  }
}
