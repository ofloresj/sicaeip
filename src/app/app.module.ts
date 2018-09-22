import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login';
import { AdminComponent } from './components/admin.component';
import { PanelPrincipal } from './components/panel-principal.component';
import { ConsultaConponent } from './components/consulta-adeudos.component';
import { ValidarConponent } from './components/validar-pagos.component';
import { AltaTotalComponent } from './components/alta-total.component';
import { AltaParcialComponent } from './components/alta-parcial.component';
import { AltaNuevaComponent } from './components/nueva-inscripcion.component';
import { ActualizaComponent } from './components/actualizar-padron.component';


import { routing, appRoutingProviders } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    PanelPrincipal,
    ConsultaConponent,
    ValidarConponent,
    AltaTotalComponent,
    ActualizaComponent,
    AltaParcialComponent,
    AltaNuevaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
