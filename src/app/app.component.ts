import { Component } from '@angular/core';
import { ActorComponent } from './actor/actor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ActorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'theater';
}
