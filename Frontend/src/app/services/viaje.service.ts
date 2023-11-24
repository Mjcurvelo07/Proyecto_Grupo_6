import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajeI } from 'src/models/Viaje'; // Asegúrate de tener el modelo correcto

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/viajes`; // Asegúrate de ajustar la ruta según la API de backend

  constructor(private http: HttpClient) { }

  getAllViajes(): Observable<{ viajes: ViajeI[] }> {
    return this.http.get<{ viajes: ViajeI[] }>(this.base_path);
  }

  createViaje(data: any): Observable<ViajeI> {
    return this.http.post<ViajeI>(this.base_path, data);
  }

  deleteViaje(id: number): Observable<ViajeI> {
    return this.http.delete<ViajeI>(`${this.base_path}/${id}`);
  }

  getOneViaje(id: number): Observable<{ viaje: ViajeI[] }> {
    return this.http.get<{ viaje: ViajeI[] }>(`${this.base_path}/${id}`);
  }

  updateViaje(id: number, data: any): Observable<ViajeI> {
    return this.http.patch<ViajeI>(`${this.base_path}/${id}`, data);
  }
}

