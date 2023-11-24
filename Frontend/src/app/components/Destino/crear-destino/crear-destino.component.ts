import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinoService } from 'src/app/services/destino.service';
import { DestinoI } from 'src/models/Destino';
import {Message,MessageService} from 'primeng/api';


@Component({
  selector: 'app-crear-destino',
  templateUrl: './crear-destino.component.html',
  styleUrls: ['./crear-destino.component.css']
})
export class CrearDestinoComponent implements OnInit{
  public form:FormGroup=this.formBuilder.group({
    codigo_destino: ['', [Validators.required]],
    estado: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private destinoService: DestinoService,
    private messageService: MessageService,

    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: DestinoI = this.form.value;
    console.log(formValue);
    this.destinoService.createDestino(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Destino Creado', life:5000});

     }, 0);
        this.router.navigateByUrl('destinos');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }


  cancel() {
    this.router.navigateByUrl('/destinos');
  }

  get codigo_destino() { return this.form.get('codigo_destino'); }
  get estado() { return this.form.get('estado'); }

}
