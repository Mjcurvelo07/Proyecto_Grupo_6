import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajeroI } from 'src/models/Viajero';

@Injectable({
  providedIn: 'root'
})
export class ViajeroService {

  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/viajeros`; // Asegúrate de ajustar la ruta según la API de backend

  constructor(private http: HttpClient) { }

  getAllViajeros(): Observable<{ viajeros: ViajeroI[] }> {
    return this.http.get<{ viajeros: ViajeroI[] }>(this.base_path);
  }

  createViajero(data: any): Observable<ViajeroI> {
    return this.http.post<ViajeroI>(this.base_path, data);
  }

  deleteViajero(id: number): Observable<ViajeroI> {
    return this.http.delete<ViajeroI>(`${this.base_path}/${id}`);
  }

  getOneViajero(id: number): Observable<{ viajero: ViajeroI[] }> {
    return this.http.get<{ viajero: ViajeroI[] }>(`${this.base_path}/${id}`);
  }

  updateViajero(id: number, data: any): Observable<ViajeroI> {
    return this.http.patch<ViajeroI>(`${this.base_path}/${id}`, data);
  }
}
