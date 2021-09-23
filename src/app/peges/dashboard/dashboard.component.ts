import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    
  listaUsuarios: any;

  constructor(private usuarioService: UsuarioService) { 
    this.usuarioService.getUsuarios().subscribe(data=>{
     this.listaUsuarios=data.data;
    
    })
  }
  

  ngOnInit(): void {

  }

  /*onChage(evento: string):void {
    this.usuarioService.modificarText(this.texto);
  }
*/
}
