import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DestinoI } from 'src/models/Destino';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/destinos`      //tener en cuenta la ruta es la de backend
  

  constructor(
    private http:HttpClient
  ) { }

  getAllDestinos():Observable<{destinos:DestinoI[]}>{
    return this.http
      .get<{destinos:DestinoI[]}>(this.base_path)
  }

  createDestino(data: any):Observable<DestinoI>{
    return this.http.post<DestinoI>(this.base_path, data)
  }

  deleteDestino(id: number): Observable<DestinoI> {
    return this.http.delete<DestinoI>(`${this.base_path}/${id}`);
  }

  getOneDestino(id: number): Observable<{ destino: DestinoI[] }> {
    return this.http.get<{ destino: DestinoI[] }>(`${this.base_path}/${id}`);
  }

  updateDestino(id: number, data: any): Observable<DestinoI> {
    return this.http.patch<DestinoI>(`${this.base_path}/${id}`, data);
  }
   

}
