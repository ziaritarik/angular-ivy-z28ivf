import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>{{countere}}Hello {{message}} {{counter}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  message = 'world';
  counter = 0;
  countere = 0;
  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);

    setInterval(() => {
      this.countere--;
    }, 1000);
  }
}
