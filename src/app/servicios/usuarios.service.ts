import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService{

  constructor(private linkjsona:HttpClient, private route:Router) {}

  obtenerDatos(): Observable<any>{
    return this.linkjsona.get("https://reqres.in/api/users");
  }
}