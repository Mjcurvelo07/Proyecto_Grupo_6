import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinoService } from 'src/app/services/destino.service';
import { DestinoI } from 'src/models/Destino';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrar-destino',
  templateUrl: './mostrar-destino.component.html',
  styleUrls: ['./mostrar-destino.component.css']
})
export class MostrarDestinoComponent implements OnInit{
  public destinos: DestinoI[] = [];
  public displayedColumns: string[] = ["id","codigo_destino","estado"]

  constructor(
    private destinoService: DestinoService,
    private router: Router,
    private messageService: MessageService
  ) { }


  ngOnInit() {
    this.destinoService.getAllDestinos().subscribe((data) => {
        this.destinos = data.destinos;
    });
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/destino');
    this.destinoService.deleteDestino(id).subscribe(
      () => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Destino Eliminado', life:5000});
        this.ngOnInit();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/destino');

      }
    );
  }

  imprimir(id: number){

  }

}
