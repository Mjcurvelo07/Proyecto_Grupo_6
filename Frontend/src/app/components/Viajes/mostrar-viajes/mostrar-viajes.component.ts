import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajeService } from 'src/app/services/viaje.service';
import { ViajeI } from 'src/models/Viaje';

@Component({
  selector: 'app-mostrar-viajes',
  templateUrl: './mostrar-viajes.component.html',
  styleUrls: ['./mostrar-viajes.component.css']
})
export class MostrarViajesComponent implements OnInit{
  public viajes: ViajeI[] = [];
  public displayedColumns: string[] = ["id","numero_plaza","fecha_viaje","estado"]

  constructor(
    private viajeService: ViajeService,
    private router: Router
  ) { }


  ngOnInit() {
    this.viajeService.getAllViajes().subscribe((data) => {
        this.viajes = data.viajes;
    });
  }

}
