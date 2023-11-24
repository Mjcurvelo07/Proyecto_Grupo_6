import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ReferenciaFamiliarService } from 'src/app/services/referencia-familiar.service';
import { ReferenciaFamiliarI } from 'src/models/Referencia_familiar';

@Component({
  selector: 'app-crear-referencia',
  templateUrl: './crear-referencia.component.html',
  styleUrls: ['./crear-referencia.component.css']
})
export class CrearReferenciaComponent {

  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private referenciaFamiliarService: ReferenciaFamiliarService,
    private messageService: MessageService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: ReferenciaFamiliarI = this.form.value;
    this.referenciaFamiliarService.createReferenciaFamiliar(formValue).subscribe(
      () => {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Referencia Familiar Creada',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('referenciasFamiliares');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/referenciasFamiliares');
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get apellido() {
    return this.form.get('apellido');
  }

  get direccion() {
    return this.form.get('direccion');
  }

  get telefono() {
    return this.form.get('telefono');
  }

  get estado() {
    return this.form.get('estado');
  }

}
