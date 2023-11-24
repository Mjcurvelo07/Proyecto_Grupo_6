import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarOrigenComponent } from './components/Origen/mostrar-origen/mostrar-origen.component';
import { CrearOrigenComponent } from './components/Origen/crear-origen/crear-origen.component';
import { ActualizarOrigenComponent } from './components/Origen/actualizar-origen/actualizar-origen.component';
import { EliminarOrigenComponent } from './components/Origen/eliminar-origen/eliminar-origen.component';
import { MostrarDestinoComponent } from './components/Destino/mostrar-destino/mostrar-destino.component';
import { CrearDestinoComponent } from './components/Destino/crear-destino/crear-destino.component';
import { ActualizarDestinoComponent } from './components/Destino/actualizar-destino/actualizar-destino.component';
import { EliminarDestinoComponent } from './components/Destino/eliminar-destino/eliminar-destino.component';
import { EliminarReferenciaComponent } from './components/Referencia_familiar/eliminar-referencia/eliminar-referencia.component';
import { ActualizarReferenciaComponent } from './components/Referencia_familiar/actualizar-referencia/actualizar-referencia.component';
import { MostrarReferenciaComponent } from './components/Referencia_familiar/mostrar-referencia/mostrar-referencia.component';
import { CrearReferenciaComponent } from './components/Referencia_familiar/crear-referencia/crear-referencia.component';
import { EliminarViajesComponent } from './components/Viajes/eliminar-viajes/eliminar-viajes.component';
import { ActualizarViajesComponent } from './components/Viajes/actualizar-viajes/actualizar-viajes.component';
import { CrearViajesComponent } from './components/Viajes/crear-viajes/crear-viajes.component';
import { MostrarViajesComponent } from './components/Viajes/mostrar-viajes/mostrar-viajes.component';
import { EliminarViajeroComponent } from './components/Viajero/eliminar-viajero/eliminar-viajero.component';
import { ActualizarViajeroComponent } from './components/Viajero/actualizar-viajero/actualizar-viajero.component';
import { CrearViajeroComponent } from './components/Viajero/crear-viajero/crear-viajero.component';
import { MostrarViajeroComponent } from './components/Viajero/mostrar-viajero/mostrar-viajero.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "origen",
    component: MostrarOrigenComponent
  },
  {
    path: "addorigen",
    component: CrearOrigenComponent
  },
  {
    path: "origen/edit/:id",
    component: ActualizarOrigenComponent
  },
  {
    path: "origen/eliminar/:id",
    component: EliminarOrigenComponent
  },
  {
    path: "destino",
    component: MostrarDestinoComponent
  },
  {
    path: "adddestino",
    component: CrearDestinoComponent
  },
  {
    path: "destino/edit/:id",
    component: ActualizarDestinoComponent
  },
  {
    path: "destino/:id",
    component: EliminarDestinoComponent
  },
  {
    path: "referencia",
    component: MostrarReferenciaComponent
  },
  {
    path: "addreferencia",
    component: CrearReferenciaComponent
  },
  {
    path: "referencia/edit/:id",
    component: ActualizarReferenciaComponent
  },
  {
    path: "referencia/eliminar/:id",
    component: EliminarReferenciaComponent
  },
  {
    path: "viaje",
    component: MostrarViajesComponent
  },
  {
    path: "addviaje",
    component: CrearViajesComponent
  },
  {
    path: "viaje/edit/:id",
    component: ActualizarViajesComponent
  },
  {
    path: "viaje/eliminar/:id",
    component: EliminarViajesComponent
  },
  {
    path: "viajero",
    component: MostrarViajeroComponent
  },
  {
    path: "addviajero",
    component: CrearViajeroComponent
  },
  {
    path: "viajero/edit/:id",
    component: ActualizarViajeroComponent
  },
  {
    path: "viajero/eliminar/:id",
    component: EliminarViajeroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
