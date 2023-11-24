import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrigenService } from 'src/app/services/origen.service';
import { OrigenI } from 'src/models/Origen';

@Component({
  selector: 'app-mostrar-origen',
  templateUrl: './mostrar-origen.component.html',
  styleUrls: ['./mostrar-origen.component.css']
})
export class MostrarOrigenComponent implements OnInit{
  public origenes: OrigenI[] = [];
  public displayedColumns: string[] = ["id","codigo_origen","estado"]

  constructor(
    private origenService: OrigenService,
    private router: Router
  ) { }


  ngOnInit() {
    this.origenService.getAllOrigenes().subscribe((data) => {
        this.origenes = data.origenes;
    });
  }


}
