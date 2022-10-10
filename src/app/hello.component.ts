import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>{{getMessage()}} !!Hello {{message}} {{counter}}!</h1>
  
  <p> {{LongText}}</p>
  <p [textContent]=LongText> </p>

  <p textContent=LongText> </p>
  <p textContent={{LongText}}> </p>

  
  <input [value]="message"/>
  <input value={{message}}/>
  <br><br>
  <button  disabled='disabled'>Submit</button>
  <br>
  <button  [disabled]='disabled'>Submit</button>
  <br><br>

  <input [value]="getMessage()"/><br><br>
  <input [value]="getname()"/>

  <h1>Counter :  {{conteur}}!</h1>
  <button (click)="increment()">Increment</button>
  
  <br><br>
  <input [(ngModel)]="name"/>
  {{name}}
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  message = 'world';
  counter = 0;
  conteur = 0;
  LongText = 'Lorem Ipsum';
  disabled = false;
  lastName = 'Tarik';
  firstName = 'Ziari';
  name = 'TZ';
  constructor() {
    /*
    setInterval(() => {
      this.counter++;
    }, 1000);

    setInterval(() => {
      this.countere--;
    }, 1000);*/
  }

  getMessage() {
    return 'world';
  }
  getname() {
    return this.firstName + '    ' + this.lastName;
  }
  increment() {
    this.conteur++;
  }
}
