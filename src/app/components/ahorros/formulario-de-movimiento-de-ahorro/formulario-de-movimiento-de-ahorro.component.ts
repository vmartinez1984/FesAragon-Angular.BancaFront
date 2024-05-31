import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AhorroDtoIn, MovimientoDtoIn } from 'src/app/interfaces/ahorro';

@Component({
  selector: 'app-formulario-de-movimiento-de-ahorro',
  templateUrl: './formulario-de-movimiento-de-ahorro.component.html',
  styleUrls: ['./formulario-de-movimiento-de-ahorro.component.css']
})
export class FormularioDeMovimientoDeAhorroComponent {
  submitted: boolean = false
  get f() { return this.formGroup.controls }

  formGroup!: FormGroup
  estaCargando = false

  @Output() eventEmmiter = new EventEmitter<MovimientoDtoIn>()
  @ViewChild('cantidad') inputNombre!: ElementRef

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
      cantidad: ['', Validators.required],
      referencia: [''],
      concepto: ['']
    })
  }

  guardar() {
    this.submitted = true
    console.log(this.formGroup)
    if (this.formGroup.valid) {
      let movimiento: MovimientoDtoIn = {
        cantidad: this.formGroup.value.cantidad,
        concepto: this.formGroup.value.concepto,
        referencia: this.formGroup.value.referencia,
        id: ''
      }
      this.eventEmmiter.emit(movimiento)
    } else {
      if (this.formGroup.get('cantidad')?.errors != null) {
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
      this.formGroup.controls['cantidad'].disable()
      this.formGroup.controls['referencia'].disable()
      this.formGroup.controls['concepto'].disable()
    } else {
      this.formGroup.controls['cantidad'].enable()
      this.formGroup.controls['referencia'].enable()
      this.formGroup.controls['concepto'].enable()
    }
  }
}
