import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  dado: string = 'Olá Mundo!';
  link = 'https://www.youtube.com/watch?v=rFJOBl0MHts&pp=ygUWZ2Vuc2hpbiBpbXBhY3QgdHJhaWxlcg%3D%3D';

}
