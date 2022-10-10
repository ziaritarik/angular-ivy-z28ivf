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

  <input [value]="getMessage()"/>

  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  message = 'world';
  counter = 0;
  LongText = 'Lorem Ipsum';
  disabled = false;
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
}
