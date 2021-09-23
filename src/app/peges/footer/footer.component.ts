import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contenido: String;
  constructor() { 
    this.contenido="Carlos @todo los derechos reservadps";
  }

  ngOnInit(): void {
  }

}
