import { Component, OnInit } from '@angular/core';
//servicio
import {UsuarioaccService} from '../servicios/usuarioacc.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  datosPerfil:any;
  constructor(private datosP:UsuarioaccService) { }
  
  ngOnInit(): void {
    this.datosPerfil=this.datosP.datosSesion();
  }

}
