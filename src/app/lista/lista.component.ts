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
  constructor(private cargarDatos: UsuariosService) { 
    this.cargarLista();
  }
  cargarLista(){
    this.usuarios=this.cargarDatos.obtenerDatos().subscribe(resultado=>{
        this.usuarios=resultado;
      },
      error=>{
        console.log(JSON.stringify(error));
      }
    );
  }
  ngOnInit(): void {
    this.cargarLista();
  }
}
