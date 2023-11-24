import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DestinoService } from 'src/app/services/destino.service';
import { DestinoI } from 'src/models/Destino';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-actualizar-destino',
  templateUrl: './actualizar-destino.component.html',
  styleUrls: ['./actualizar-destino.component.css']
})
export class ActualizarDestinoComponent implements OnInit {
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
    codigo_destino: ['', [Validators.required]],
    estado: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private destinoService: DestinoService,
    private messageService: MessageService,   
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getdestino(this.id);

  }



  getdestino(id: number){
    this.destinoService.getOneDestino(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data.destino)
        // console.log(data.cliente)
      }
    })
  }

  onSubmit(): void {
    const formValue: DestinoI = this.form.value;
    const id: number =  this.form.value.id
    this.destinoService.updateDestino(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Destino Actualizado', life:5000});

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
