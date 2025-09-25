import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {

  actors: any;
  actorForm: any;
  constructor(
    private api: ApiService,
    private builder: FormBuilder
  ){}

  ngOnInit(){
    this.getActors()
    this.actorForm = this.builder.group({
      name: '',
      city: '',
      birthDate: ''
    })
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

  addActor() {
    // console.log('műkszik')
    console.log(this.actorForm.value)
    const newActor = {
      name: this.actorForm.value.name,
      city: this.actorForm.value.city,
      birth: this.actorForm.value.birthDate
    }
    this.api.addActor(newActor)
    this.api.addActor(this.actorForm.value).subscribe({
      next: (result) => {
        console.log(result)
        this.getActors()
        this.actorForm.reset()
      }
    })
  }
}
