import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './peges/dashboard/dashboard.component';
import { ListadoUsuarioComponent } from './peges/dashboard/listado-usuario/listado-usuario.component';
import { UsuarioComponent } from './peges/dashboard/usuario/usuario.component';
import { InicioComponent } from './peges/inicio/inicio.component';
import { PageNotFoundComponent } from './peges/page-not-found/page-not-found.component';

const routes: Routes = [
   { path: '', redirectTo: 'inicio', pathMatch:'full'},
   { path: 'inicio', component: InicioComponent },
   { path: 'dashboard', component: DashboardComponent, children: [
     {path: '',component: ListadoUsuarioComponent},
     {path:'usuario/:id',component: UsuarioComponent}
   ]},
   { path:'**',component: PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
