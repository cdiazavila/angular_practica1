import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './peges/navbar/navbar.component';
import { FooterComponent } from './peges/footer/footer.component';
import { DashboardComponent } from './peges/dashboard/dashboard.component';
import { CardComponent } from './peges/dashboard/card/card.component';
import { InicioComponent } from './peges/inicio/inicio.component';
import { PageNotFoundComponent } from './peges/page-not-found/page-not-found.component';
import { ListadoUsuarioComponent } from './peges/dashboard/listado-usuario/listado-usuario.component';
import { UsuarioComponent } from './peges/dashboard/usuario/usuario.component';
import { SpinerComponent } from './peges/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent,
    InicioComponent,
    PageNotFoundComponent,
    ListadoUsuarioComponent,
    UsuarioComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
