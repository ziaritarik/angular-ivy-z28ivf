import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  //Interpolatiion permet de changer {{}} par ## ##
  //interpolation: ['##', '##'],
})
export class HelloComponent {
  isErroe: boolean = false;
  message = 'world';
  counter = 0;
  conteur = 0;
  LongText = 'Lorem Ipsum';
  disabled = false;
  lastName = 'Tarik';
  firstName = 'Ziari';
  name = 'TZ';

  user = {
    fisrtname: 'Tarik',
    lastname: 'Ziari',
  };
  date = new Date();
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

  callserch(term) {
    console.log(term);
  }
}
