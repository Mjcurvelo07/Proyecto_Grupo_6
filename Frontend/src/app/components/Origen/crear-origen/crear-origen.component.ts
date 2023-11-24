import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { OrigenService } from 'src/app/services/origen.service';
import { OrigenI } from 'src/models/Origen';

@Component({
  selector: 'app-crear-origen',
  templateUrl: './crear-origen.component.html',
  styleUrls: ['./crear-origen.component.css']
})
export class CrearOrigenComponent implements OnInit{

  public form: FormGroup = this.formBuilder.group({
    codigo_origen: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private origenService: OrigenService, // Asegúrate de inyectar el servicio correcto
    private messageService: MessageService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: OrigenI = this.form.value;
    console.log(formValue);
    this.origenService.createOrigen(formValue).subscribe(
      () => {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Origen Creado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('origenes');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/origenes');
  }

  get codigo_origen() {
    return this.form.get('codigo_origen');
  }

  get estado() {
    return this.form.get('estado');
  }

}
