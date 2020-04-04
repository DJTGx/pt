import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private linkjson:HttpClient) {}

  obtenerDatos(): Observable<any>{
    return this.linkjson.get("https://reqres.in/api/users");
  }
}
