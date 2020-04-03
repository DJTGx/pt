import { Component, OnInit } from '@angular/core';
//servicios
import {UsuariosService} from '../servicios/usuarios.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios:any;
  constructor(private datos:UsuariosService) { }

  ngOnInit(): void {
  }
  cargarLista(){
    
  }
}
