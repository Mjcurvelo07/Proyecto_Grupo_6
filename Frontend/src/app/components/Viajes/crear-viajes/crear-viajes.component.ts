
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ViajeService } from 'src/app/services/viaje.service';
import { ViajeI } from 'src/models/Viaje';
@Component({
  selector: 'app-crear-viajes',
  templateUrl: './crear-viajes.component.html',
  styleUrls: ['./crear-viajes.component.css']
})
export class CrearViajesComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    numero_plaza: ['', [Validators.required]],
    fecha_viaje: ['', [Validators.required]],
    estado: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private viajeService: ViajeService, // Asegúrate de inyectar el servicio correcto
    private messageService: MessageService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: ViajeI = this.form.value;
    console.log(formValue);
    this.viajeService.createViaje(formValue).subscribe(
      () => {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Viaje Creado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('viajes');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/viajes');
  }

  get numero_plaza() {
    return this.form.get('numero_plaza');
  }
  get fecha_viaje() {
    return this.form.get('fecha_viaje');
  }
  get estado() {
    return this.form.get('estado');
  }

}
