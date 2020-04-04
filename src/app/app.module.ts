import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { AccesoComponent } from './acceso/acceso.component';
//servicios
import {UsuariosService} from './servicios/usuarios.service';
import {UsuarioaccService} from './servicios/usuarioacc.service'

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AccesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuariosService, UsuarioaccService],
  bootstrap: [AppComponent]
})
export class AppModule { }
