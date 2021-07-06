import { Component, OnInit } from '@angular/core';
import { Camara } from '../js/camara-class';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

   camara: any;
   foto: any; 
  constructor() { }

  ngOnInit(): void {

    
    this.camara = new Camara(document.getElementById("player"));
    
  }

  iniciarCamara() {
    console.log("iniciando camara")
    this.camara.encender();

  }

  tomarFoto(){
    console.log("apgando camara");
    this.foto = this.camara.tomarFoto();
    console.log(this.foto);    
    this.camara.apagar();
  }

}
