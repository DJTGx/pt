import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';
//servicios
import {UsuarioaccService} from '../servicios/usuarioacc.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  error:any;
  datosform:FormGroup;
  cargar:any;
  constructor(private acceso:UsuarioaccService, private route: Router, private siacc:AppComponent, private fmr:FormBuilder) {
    this.datosform=this.fmr.group({
      eform: ['', [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      pform: ['', Validators.required]
    });
  }
  ngOnInit():void { }
  cargarDatos() {
    //esperamos a que se guarden en el localStorage para cargar datos de la session activa
    if(localStorage.getItem("datosSession")){
      this.siacc.bLogio=this.acceso.botonL;
      this.siacc.datosUsuario=this.acceso.datosUsuario;
      clearTimeout(this.cargar);
    }
  }
    
  acceder(formulario){
    //preparamos pasos y validacion para el acceso
    this.cargar=setInterval(() => { this.cargarDatos() }, 1000);
    this.siacc.bLogio="Cargando";
    this.acceso.login(formulario.value.eform,formulario.value.pform);
    this.error=this.acceso.hayError();
  }
}