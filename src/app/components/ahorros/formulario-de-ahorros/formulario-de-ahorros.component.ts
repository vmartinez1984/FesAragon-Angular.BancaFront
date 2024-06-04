import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AhorroDtoIn } from 'src/app/interfaces/ahorro'

@Component({
  selector: 'app-formulario-de-ahorros',
  templateUrl: './formulario-de-ahorros.component.html',
  styleUrls: ['./formulario-de-ahorros.component.css']
})
export class FormularioDeAhorrosComponent {
  submitted: boolean = false
  get f() { return this.formGroup.controls }

  formGroup!: FormGroup
  estaCargando = false

  @Output() eventEmmiter = new EventEmitter<AhorroDtoIn>()
  @Input() ahorro?: AhorroDtoIn

  @ViewChild('nombre') inputNombre!: ElementRef

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.inicializarFormgroup()
  }

  ngOnInit() {
    setTimeout(() => {
      this.inputNombre.nativeElement.focus()
    }, 500)
  }

  inicializarFormgroup() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      clienteNombreCompleto: [''],
      interes: [0, Validators.required],
      nota: ''
    })
    this.formGroup.controls['clienteNombreCompleto'].disable()
  }

  guardar() {
    this.submitted = true
    console.log(this.formGroup)
    if (this.formGroup.valid) {
      console.log(this.formGroup.value)
      if (this.ahorro) {        
        this.ahorro.interes = this.formGroup.value.interes
        this.ahorro.nombre = this.formGroup.value.nombre
        this.ahorro.nota = this.formGroup.value.nota
      }
      this.eventEmmiter.emit(this.ahorro)
    } else {
      if (this.formGroup.get('nombre')?.errors != null) {
        this.inputNombre.nativeElement.focus()
      }
    }
  }

  cargando(estaCargando: boolean) {
    this.estaCargando = estaCargando
    this.habilitarFormulario(estaCargando)
  }

  habilitarFormulario(habilitar: boolean) {
    if (habilitar) {
      this.formGroup.controls['nombre'].disable()      
      this.formGroup.controls['interes'].disable()
      this.formGroup.controls['nota'].disable()      
    } else {
      this.formGroup.controls['nombre'].enable()      
      this.formGroup.controls['interes'].enable()
      this.formGroup.controls['nota'].enable()      
    }
  }
}
