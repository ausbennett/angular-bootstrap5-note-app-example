import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {NoteService} from "../note.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent {
  titleControl = new FormControl('', Validators.required)
  dateControl = new FormControl('', Validators.required)
  bodyControl = new FormControl('', Validators.required)

  constructor(private noteservice:NoteService, private router:Router){}

submitNote(){
    this.noteservice.addNote({
      title: this.titleControl.value,
      date: this.dateControl.value,
      body: this.bodyControl.value
    });
    this.router.navigateByUrl('/')
  }
}
