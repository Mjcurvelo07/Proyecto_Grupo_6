import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem [] = [];
  estilosMenu: {}= {
    'background-color': '#8DC3D8',
    'border': '0',


  }
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Viajero',
        icon: 'pi pi-fw pi-users',
        routerLink: '/viajero'
        
      },
      {
        label: 'Viajes',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: '/viaje'
      },
      {
        label: 'Referencias Familiares',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/referencia'
      },
      {
        label: 'Destino',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/destino'
      },
      {
        label: 'Origen',
        icon: 'pi pi-fw pi-wallet',
        routerLink: '/origen'
      }

    ];
  }

}
