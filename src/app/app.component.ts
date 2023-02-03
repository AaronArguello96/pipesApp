import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private primeNgConfig:PrimeNGConfig){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.primeNgConfig.ripple = true
  }
  
  nombre: string = 'pepe gotera';
  valor:number = 1000;
  obj = {
    nombre: 'pepe'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }
}
