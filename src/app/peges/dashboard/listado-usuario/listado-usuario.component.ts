import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.scss']
})
export class ListadoUsuarioComponent implements OnInit {
  listaUsuarios: any;
  cargando:boolean;
  paginaActual:number;
  totalPagina:number;
  
  constructor(private usuarioService: UsuarioService) { 
    this.cargando=true;
    this.paginaActual=1;
    this.totalPagina=1;
    this.obtenerUsuarios();
  }

  ngOnInit(): void {
  }
  paginaAnterior():void{
 this.paginaActual--;
 this.obtenerUsuarios();
  }
  paginaSiguente():void{
    this.paginaActual++;
    this.obtenerUsuarios();
  }

  obtenerUsuarios():void{
    this.usuarioService.getUsuarios(this.paginaActual).subscribe(data=>{
    this.cargando=false;
     this.listaUsuarios=data.data;
     this.totalPagina=data.meta.pagination.pages;
     this.paginaActual=data.meta.pagination.page;
    
    })
  }
}
