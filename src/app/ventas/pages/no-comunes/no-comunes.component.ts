import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {

  //i18 Select
  nombre:string = 'Naroa';
  genero:string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18 Plural
  clientes:string [] = ['Maria', 'Pepe', 'Antonio', 'Antonio', 'Antonio', 'Antonio', 'Antonio', 'Antonio', 'Antonio'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    'other': 'tenemos # clientes esperando' //Se pone la almohadilla porque devuelve un número.

  }

  cambiarCliente(){
    this.nombre = 'Aarón';
    this.genero = 'Masculino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //Keyvalue Pipe
  persona = {
    nombre: 'Aaron',
    edad: '26',
    direccion: 'Alaska, EEUU'
  }

  //JSON pipe
  heroes =
  [
    {
      nombre: 'Ironman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: true
    },
    {
      nombre: 'Hulk',
      vuela: false
    }
  ]
  
  //Async pipe
  miObservable = interval(1000); 

  valorPromesa = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data de la promesa');
    },3500)
  })
}
