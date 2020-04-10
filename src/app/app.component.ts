import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//servicios
import {UsuarioaccService} from './servicios/usuarioacc.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt';
  bLogio:string="";
  datosUsuario:any;
  constructor(private route:Router, private miu:UsuarioaccService){
    
  }
  logout(){
    this.miu.logout();
    this.bLogio=this.miu.estadoLogio();
  }
  ModuloAcceso(){
    this.route.navigate(['/login']);
    //this.miu.logi();
    //this.botonLogio=this.miu.estadoSesion;
  }
  ngOnInit(): void {
    console.log('holas desde raiz');
    this.bLogio=this.miu.estadoLogio();
    this.datosUsuario=this.miu.datosSesion();
    /*this.miu.almacenarLista();
    this.miu.botonLogio();
    this.botonLogio=this.miu.estadoSesion;
    this.NUsuario=this.miu.validarTU();*/
  }
}
