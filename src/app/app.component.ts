import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';
  upperText: string = 'Display upeercase';
  lowerText: string = 'Display Upeercase';
  percent: number = 0.5;
  dateValue: Date = new Date();
  money: number = 598;

  user: User = {
    name: 'BOB',
    age: 25
  }

  

}
