import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  id: string;
  nombre:string;
  genero:string;
  email:string;
  status:string;
  cargando:boolean;


  constructor(private  aRoute: ActivatedRoute, private usarioservice:UsuarioService) { 
      this.nombre="";
      this.genero="";
      this.email="";
      this.status="";
      this.cargando=true;
      this.id=this.aRoute.snapshot.paramMap.get('id')!;
      this.usarioservice.getUsuario(this.id).subscribe(datos=>{
      this.cargando=false;
      this.nombre=datos.data.name;
      this.genero=datos.data.gender;
      this.email=datos.data.email;
      this.status=datos.data.status;
    
     })
  }

  ngOnInit(): void {
   
  }

}
