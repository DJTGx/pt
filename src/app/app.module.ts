import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { AccesoComponent } from './acceso/acceso.component';
import { PrimeravistaComponent } from './primeravista/primeravista.component';
import { PerfilComponent } from './perfil/perfil.component';

//servicios
import {UsuariosService} from './servicios/usuarios.service';
import {UsuarioaccService} from './servicios/usuarioacc.service';
import { AutenticadorService } from './servicios/autenticador.service';

//guard
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';

//rutas
const routes: Routes=[
  {path: '', component:PrimeravistaComponent},
  {path: 'login', component:AccesoComponent, canActivate:[LogoutGuard]},
  {path: 'lista', component:ListaComponent, canActivate:[LoginGuard]},
  {path: 'perfil', component:PerfilComponent, canActivate:[LoginGuard]}
]
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AccesoComponent,
    PrimeravistaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})
  ],
  providers: [
    UsuariosService, 
    UsuarioaccService, 
    LoginGuard,
    LogoutGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticadorService,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
