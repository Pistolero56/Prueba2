import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../modelo/api';
import { ApiId } from '../modelo/api-id';

@Injectable({
  providedIn: 'root'
})
export class BaseCrudService {
  public url_api = "https://dummyjson.com/auth/products?skip=0";

  constructor(private cliente: HttpClient) { }

  listarTodo(): Observable<Api>{
    return this.cliente.get<Api>(`${environment.ApiUrl}/api`)
  }

  agregarDatos(newdato: Api): Observable<Api>{
    return this.cliente.post<Api>(`${environment.ApiUrl}/api`,newdato)
  }

  obtenerDatoByID(id: number): Observable<ApiId>{
    return this.cliente.get<ApiId>(`${environment.ApiUrl}/api/?id=${id}`)
  }

  actualizarDatos(api: Api){
    let url = this.url_api + "/" + api.id;
    return this.cliente.put(url,api);
  }

  eliminarDatosByID(id: number){
    let url = this.url_api + "/" + id;
    return this.cliente.delete(url);
  }

  refresh(){
    window.location.reload()
  }
}
