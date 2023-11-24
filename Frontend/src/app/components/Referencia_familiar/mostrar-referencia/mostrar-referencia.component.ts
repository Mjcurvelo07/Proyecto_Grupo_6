import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferenciaFamiliarService } from 'src/app/services/referencia-familiar.service';
import { ReferenciaFamiliarI } from 'src/models/Referencia_familiar';

@Component({
  selector: 'app-mostrar-referencia',
  templateUrl: './mostrar-referencia.component.html',
  styleUrls: ['./mostrar-referencia.component.css']
})
export class MostrarReferenciaComponent implements OnInit{
  public referenciasFamiliar: ReferenciaFamiliarI[] = [];
  public displayedColumns: string[] = ["id","nombre","apellido","direccion","telefono","estado"]

  constructor(
    private referenciasFamiliares: ReferenciaFamiliarService,
    private router: Router
  ) { }


  ngOnInit() {
    this.referenciasFamiliares.getAllReferenciasFamiliares().subscribe((data) => {
        this.referenciasFamiliar = data.referenciasFamiliares;
    });
  }

}
