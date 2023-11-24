import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContentComponent } from './components/layout/content/content.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { MostrarReferenciaComponent } from './components/Referencia_familiar/mostrar-referencia/mostrar-referencia.component';
import { CrearReferenciaComponent } from './components/Referencia_familiar/crear-referencia/crear-referencia.component';
import { ActualizarReferenciaComponent } from './components/Referencia_familiar/actualizar-referencia/actualizar-referencia.component';
import { EliminarReferenciaComponent } from './components/Referencia_familiar/eliminar-referencia/eliminar-referencia.component';
import { MostrarViajesComponent } from './components/Viajes/mostrar-viajes/mostrar-viajes.component';
import { CrearViajesComponent } from './components/Viajes/crear-viajes/crear-viajes.component';
import { ActualizarViajesComponent } from './components/Viajes/actualizar-viajes/actualizar-viajes.component';
import { EliminarViajesComponent } from './components/Viajes/eliminar-viajes/eliminar-viajes.component';
import { MostrarOrigenComponent } from './components/Origen/mostrar-origen/mostrar-origen.component';
import { CrearOrigenComponent } from './components/Origen/crear-origen/crear-origen.component';
import { ActualizarOrigenComponent } from './components/Origen/actualizar-origen/actualizar-origen.component';
import { EliminarOrigenComponent } from './components/Origen/eliminar-origen/eliminar-origen.component';
import { MostrarDestinoComponent } from './components/Destino/mostrar-destino/mostrar-destino.component';
import { CrearDestinoComponent } from './components/Destino/crear-destino/crear-destino.component';
import { ActualizarDestinoComponent } from './components/Destino/actualizar-destino/actualizar-destino.component';
import { EliminarDestinoComponent } from './components/Destino/eliminar-destino/eliminar-destino.component';
import { MostrarViajeroComponent } from './components/Viajero/mostrar-viajero/mostrar-viajero.component';
import { CrearViajeroComponent } from './components/Viajero/crear-viajero/crear-viajero.component';
import { ActualizarViajeroComponent } from './components/Viajero/actualizar-viajero/actualizar-viajero.component';
import { EliminarViajeroComponent } from './components/Viajero/eliminar-viajero/eliminar-viajero.component';

import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AsideComponent,
    MostrarReferenciaComponent,
    CrearReferenciaComponent,
    ActualizarReferenciaComponent,
    EliminarReferenciaComponent,
    MostrarViajesComponent,
    CrearViajesComponent,
    ActualizarViajesComponent,
    EliminarViajesComponent,
    MostrarOrigenComponent,
    CrearOrigenComponent,
    ActualizarOrigenComponent,
    EliminarOrigenComponent,
    MostrarDestinoComponent,
    CrearDestinoComponent,
    ActualizarDestinoComponent,
    EliminarDestinoComponent,
    MostrarViajeroComponent,
    CrearViajeroComponent,
    ActualizarViajeroComponent,
    EliminarViajeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
    
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
