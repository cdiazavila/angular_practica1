import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  users: any = [
    {cedula:'18239', Nombre: 'Carlos Diaz', Edad:26},
    {cedula:'11293', Nombre: 'Vanesa Diaz', Edad:19},
    {cedula:'661336',Nombre: 'Pedro Sanches', Edad:21},
    {cedula:'111123',Nombre: 'Karol Diaz', Edad:26},
  
  ];
  ocultarTabla: boolean =true;

  constructor() {
    this.users;
    

   }
   mostrar(){
     console.log('mostrando...')
     this.ocultarTabla=false;
   }

   ocultar(){
    console.log('ocultar...')
    this.ocultarTabla=true;
  }


  ngOnInit(): void {
  }

}
