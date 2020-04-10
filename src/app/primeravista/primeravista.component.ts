import { Component, OnInit } from '@angular/core';

//componentes
import {AppComponent}from '../app.component';

//servicios
import {UsuarioaccService} from '../servicios/usuarioacc.service';

@Component({
  selector: 'app-primeravista',
  templateUrl: './primeravista.component.html',
  styleUrls: ['./primeravista.component.css']
})
export class PrimeravistaComponent implements OnInit {

  constructor(private servLog:UsuarioaccService, private menu:AppComponent) { }

  ngOnInit(): void {
    console.log('holas desde primera vista');
    //this.menu.bLogio=this.servLog.estadoLogio();
  }
}
