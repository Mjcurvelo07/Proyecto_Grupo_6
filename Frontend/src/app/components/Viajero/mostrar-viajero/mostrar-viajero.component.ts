import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajeroService } from 'src/app/services/viajero.service';
import { ViajeroI } from 'src/models/Viajero';

@Component({
  selector: 'app-mostrar-viajero',
  templateUrl: './mostrar-viajero.component.html',
  styleUrls: ['./mostrar-viajero.component.css']
})
export class MostrarViajeroComponent implements OnInit {
  public viajeros: ViajeroI[] = [];
  public displayedColumns: string[] = ["id","nombre","direccion","telefono","estado"]

  constructor(
    private viajeroService: ViajeroService,
    private router: Router
  ) { }


  ngOnInit() {
    this.viajeroService.getAllViajeros().subscribe((data) => {
        this.viajeros = data.viajeros;
    });
  }

}
