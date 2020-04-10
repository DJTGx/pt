import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioaccService {
  acc ={
    email:"eve.holt@reqres.in",
    pass:"cityslicka"

  }
  xlista:any;
  datosUsuario:any;
  botonL:any;
  siError:any;
  constructor(private vinculo:HttpClient, private route:Router) { }
  login(user,pass)
  {
    if(user==this.acc.email && pass==this.acc.pass){
      localStorage.setItem("session",user);
      this.siError="";
      console.log("usuario correcto");
      this.xlista=this.vinculo.get("https://reqres.in/api/users");
      this.xlista.subscribe(
        resultado=>
        {
          for (let ix = 0; ix < resultado.data.length; ix++) {
            if (resultado.data[ix].email==user){
              localStorage.setItem("datosSession",JSON.stringify(resultado.data[ix]));
              this.botonL="LogOut";
              this.datosUsuario=resultado.data[ix];
              this.redirigir();
            }
          }
        },
        error=>
          {console.log(error)}
      );
    }
    else{
      this.siError="Error en Usuario y/o Contraseña";
    }
  }
  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
    this.estadoLogio();
  }
  redirigir(){
    this.route.navigate(['/']);
    this.estadoLogio();
  }
  estadoLogio(){
    var status="LogIn";
    if (localStorage.getItem('datosSession'))
    {
      //console.log(localStorage.getItem('session'));
      status="LogOut";
      this.datosSesion();
    }
    //console.log(status);
    this.botonL=status;
    return(this.botonL);
  }
  datosSesion(){
    this.datosUsuario=JSON.parse(localStorage.getItem("datosSession"));
    return this.datosUsuario;
  }
  hayError(){
    return this.siError;
  }
}