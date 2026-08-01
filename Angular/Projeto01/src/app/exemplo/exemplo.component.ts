import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [],
  template: `
    <h2>Templete inline</h2>
  `,
  styles:`
    h2{
      color: blueviolet;
    }
  `,
  // templateUrl: './exemplo.component.html',
  // styleUrl: './exemplo.component.css'
})
export class ExemploComponent {

}
