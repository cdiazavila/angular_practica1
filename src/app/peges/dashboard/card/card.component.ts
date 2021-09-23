import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
   @Input() user: any;
   cedula:String;
   nombre:String;
   edad:number;
   id:number;
  constructor() { 
    this.cedula='';
    this.nombre='';
    this.edad=this.id=0;
  }

  ngOnInit(): void {
    this.cedula=this.user.email;
    this.nombre=this.user.name;
    this.edad=this.user.gender;
    this.id=this.user.id;
  }

}
