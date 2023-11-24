import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrigenI } from 'src/models/Origen'; // Asegúrate de importar el modelo correcto

@Injectable({
  providedIn: 'root'
})
export class OrigenService {

  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/origenes`; // Ajusta la ruta según tu backend y modelo

  constructor(
    private http: HttpClient
  ) { }

  getAllOrigenes(): Observable<{ origenes: OrigenI[] }> {
    return this.http.get<{ origenes: OrigenI[] }>(this.base_path);
  }

  createOrigen(data: any): Observable<OrigenI> {
    return this.http.post<OrigenI>(this.base_path, data);
  }

  deleteOrigen(id: number): Observable<OrigenI> {
    return this.http.delete<OrigenI>(`${this.base_path}/${id}`);
  }

  getOneOrigen(id: number): Observable<{ origen: OrigenI[] }> {
    return this.http.get<{ origen: OrigenI[] }>(`${this.base_path}/${id}`);
  }

  updateOrigen(id: number, data: any): Observable<OrigenI> {
    return this.http.patch<OrigenI>(`${this.base_path}/${id}`, data);
  }

}
