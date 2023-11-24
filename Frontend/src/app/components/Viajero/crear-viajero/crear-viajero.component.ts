import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViajeroService } from 'src/app/services/viajero.service'; // Asegúrate de importar el servicio correcto
import { ViajeroI } from 'src/models/Viajero'; // Asegúrate de importar la interfaz correcta
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-viajero',
  templateUrl: './crear-viajero.component.html',
  styleUrls: ['./crear-viajero.component.css']
})
export class CrearViajeroComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private viajeroService: ViajeroService, // Asegúrate de inyectar el servicio correcto
    private messageService: MessageService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: ViajeroI = this.form.value;
    console.log(formValue);
    this.viajeroService.createViajero(formValue).subscribe(
      () => {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Viajero Creado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('viajeros');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/viajeros');
  }

  get nombre() {
    return this.form.get('nombre');
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

