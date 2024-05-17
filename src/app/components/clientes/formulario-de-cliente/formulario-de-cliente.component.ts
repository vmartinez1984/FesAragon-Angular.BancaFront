import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteDtoIn } from 'src/app/cliente';
import { CodigoPostalDto } from 'src/app/codigo-postal';
import { Guid } from 'src/app/helpers/guid';
import { CodigoPostalService } from 'src/app/services/codigo-postal.service';

@Component({
  selector: 'app-formulario-de-cliente',
  templateUrl: './formulario-de-cliente.component.html',
  styleUrls: ['./formulario-de-cliente.component.css']
})
export class FormularioDeClienteComponent {
  codigosPostales: CodigoPostalDto[] = []
  codigoPostal?: CodigoPostalDto

  buscarCodigoPostal() {
    let codigoPostal = this.formGroup.get('codigoPostal')?.value
    this.codigosPostales = []
    if (codigoPostal.length == 5) {
      this.servicioCp.obtenerCodigoPostal(codigoPostal).subscribe({
        next: (data) => {
          console.log(data)
          if (data.length > 0) {
            let colonia: CodigoPostalDto = data[0]
            this.codigoPostal = data[0]
            this.formGroup.patchValue({
              estado: colonia.estado,
              alcaldia: colonia.alcaldia
            })
            if (data.length == 1) {
              this.codigosPostales.push(colonia)
              //console.log(colonia)
              this.formGroup.get('colonia')?.setValue(colonia.tipoDeAsentamiento + " " + colonia.asentamiento)
            } else {
              this.formGroup.get('colonia')?.setValue("")
              data.forEach((element: any) => {
                this.codigosPostales.push(element)
              });
            }
          }
        }
      })
    }
  }

  submitted: boolean = false
  get f() { return this.formGroup.controls }

  formGroup!: FormGroup
  estaCargando = false

  //@Input() ahorro!: AhorroDto
  @Output() eventEmmiter = new EventEmitter<ClienteDtoIn>()

  @ViewChild('nombre') inputNombre!: ElementRef
  // @ViewChild('tipoDeCuentaId') inputTipoDeCuentaId! :ElementRef  
  // @ViewChild('interes') inputInteres! :ElementRef  
  // @ViewChild('fechaInicial') inputFechaInicial! :ElementRef  
  // @ViewChild('fechaFinal') inputFechaFinal! :ElementRef  

  constructor(
    private formBuilder: FormBuilder,
    private servicioCp: CodigoPostalService
  ) {
    this.inicializarFormgroup()
  }

  ngOnInit() {
    setTimeout(() => {
      this.inputNombre.nativeElement.focus()
    }, 500)
  }

  // ngOnChanges() {
  //   if (this.ahorro != undefined) {
  //     console.log(this.ahorro)
  //     this.formGroup.patchValue({
  //       nombre: this.ahorro.nombre,
  //       clabe: this.ahorro.clabe,
  //       nota: this.ahorro.nota,
  //       interes: this.ahorro.interes,
  //       fechaInicial: this.ahorro.fechaInicial?.toString().substring(0, 10),
  //       fechaFinal: this.ahorro.fechaFinal?.toString().substring(0, 10),
  //       tipoDeCuentaId: this.ahorro.tipoDeCuentaId,
  //       cuentaDeReferenciaId: this.ahorro.cuentaDeReferenciaId
  //     })
  //   }
  // }

  inicializarFormgroup() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      calleYNumero: ['', Validators.required],
      referencia: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      colonia: ['', Validators.required],
      alcaldia: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }

  guardar() {
    this.submitted = true
    this.formGroup.value.alcaldia = this.codigoPostal?.alcaldia
    this.formGroup.value.estado = this.codigoPostal?.estado
    console.log(this.formGroup)
    if (this.formGroup.valid) {
      //console.log(this.formGroup.value)
      var cliente: ClienteDtoIn = {
        nombre: this.formGroup.value.nombre,
        apellidos: this.formGroup.value.apellidos,
        correo: this.formGroup.value.correo,
        telefono: this.formGroup.value.telefono,
        guid: Guid.newGuid(),
        direccion: {
          calleYNumero: this.formGroup.value.calleYNumero,
          referencia: this.formGroup.value.referencia,
          codigoPostal: this.formGroup.value.codigoPostal,
          alcaldia: this.formGroup.value.alcaldia,
          colonia: this.formGroup.value.alcaldia,
          estado: this.formGroup.value.alcaldia,
          coordenadasGps: "19.3969144,-99.133227"
        }
      }
      this.eventEmmiter.emit(cliente)
    } else {
      // if(this.formGroup.get('nombre')?.errors != null){
      //   this.inputNombre.nativeElement.focus()
      // }else if(this.formGroup.get('tipoDeCuentaId')?.errors != null){
      //   this.inputTipoDeCuentaId.nativeElement.focus()
      // }else if(this.formGroup.get('interes')?.errors != null){
      //   this.inputInteres.nativeElement.focus()
      // }else if(this.formGroup.get('fechaInicial')?.errors != null){
      //   this.inputFechaInicial.nativeElement.focus()
      // }else if(this.formGroup.get('fechaFinal')?.errors != null){
      //   this.inputFechaFinal.nativeElement.focus()
      // } 
    }
  }

  cargando(estaCargando: boolean) {
    this.estaCargando = estaCargando
    this.habilitarFormulario(estaCargando)
  }

  habilitarFormulario(habilitar: boolean) {
    if (habilitar) {
      this.formGroup.controls['nombre'].disable()
      this.formGroup.controls['clabe'].disable()
      this.formGroup.controls['nota'].disable()
      this.formGroup.controls['interes'].disable()
      this.formGroup.controls['fechaInicial'].disable()
      this.formGroup.controls['fechaFinal'].disable()
      this.formGroup.controls['tipoDeCuentaId'].disable()
      this.formGroup.controls['cuentaDeReferenciaId'].disable()
    } else {
      this.formGroup.controls['nombre'].enable()
      this.formGroup.controls['clabe'].enable()
      this.formGroup.controls['nota'].enable()
      this.formGroup.controls['interes'].enable()
      this.formGroup.controls['fechaInicial'].enable()
      this.formGroup.controls['fechaFinal'].enable()
      this.formGroup.controls['tipoDeCuentaId'].enable()
      this.formGroup.controls['cuentaDeReferenciaId'].enable()
    }
  }
}
