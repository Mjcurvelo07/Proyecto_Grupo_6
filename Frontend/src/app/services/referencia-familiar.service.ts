import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenciaFamiliarI } from 'src/models/Referencia_familiar';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaFamiliarService {

  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/referenciasfamiliares`; // Asegúrate de ajustar la ruta según la API de backend

  constructor(private http: HttpClient) { }

  getAllReferenciasFamiliares(): Observable<{ referenciasFamiliares: ReferenciaFamiliarI[] }> {
    return this.http.get<{ referenciasFamiliares: ReferenciaFamiliarI[] }>(this.base_path);
  }

  createReferenciaFamiliar(data: any): Observable<ReferenciaFamiliarI> {
    return this.http.post<ReferenciaFamiliarI>(this.base_path, data);
  }

  deleteReferenciaFamiliar(id: number): Observable<ReferenciaFamiliarI> {
    return this.http.delete<ReferenciaFamiliarI>(`${this.base_path}/${id}`);
  }

  getOneReferenciaFamiliar(id: number): Observable<{ referenciaFamiliar: ReferenciaFamiliarI[] }> {
    return this.http.get<{ referenciaFamiliar: ReferenciaFamiliarI[] }>(`${this.base_path}/${id}`);
  }

  updateReferenciaFamiliar(id: number, data: any): Observable<ReferenciaFamiliarI> {
    return this.http.patch<ReferenciaFamiliarI>(`${this.base_path}/${id}`, data);
  }
}
