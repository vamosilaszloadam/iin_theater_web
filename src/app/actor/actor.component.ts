import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {

  actors: any;
  constructor(private api: ApiService){}

  ngOnInit(){
    this.getActors()
  }
  
  getActors() {
    this.api.getActors().subscribe({
      next:(result: any) => {
        console.log(result.data)
        this.actors = result.data
      },
      // error: () => {}
    })
  }
}
