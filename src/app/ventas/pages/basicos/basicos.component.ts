import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent {
  nombreLower: string = 'aarón';
  nombreUpper: string = 'AARÓN';
  nombreCompleto: string = 'aAron ArGuEllO';
  
  fecha: Date = new Date();

}
