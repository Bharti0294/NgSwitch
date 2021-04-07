  
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'switch';

  people: any[] = [
    {
      "name": "Ganesh Devadhe",
      "age": 33,
      "country": 'Ensono'
    },
    {
      "name": "Varsha Desai",
      "age": 27,
      "country": 'Dista'
    },
    {
      "name": "Rinky sen",
      "age": 29,
      "country": 'wipro'
    },
    {
      "name": "Pradnya Garud",
      "age": 29,
      "country": 'Ensono'
    },
    {
      "name": "Nikhil Kumbhar",
      "age": 32,
      "country": 'Dista'
    }
  ];
}