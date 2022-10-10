import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //Interpolatiion permet de changer {{}} par ## ##
  interpolation: ['##', '##'],
})
export class AppComponent {
  name = 'Angular IN DARIJA ';
  age = 'age' + 32;
}
