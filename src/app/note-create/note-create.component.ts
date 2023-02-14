import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {NoteService} from "../note.service";
import {Note} from "../note.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent {
  titleControl = new FormControl('title.', Validators.required)
  dateControl = new FormControl('date.', Validators.required)
  bodyControl = new FormControl('body.', Validators.required)

  note:Note = {
    title: this.titleControl.value,
    date: this.dateControl.value,
    body: this.bodyControl.value
  }

  constructor(private noteservice:NoteService, private router:Router){}
  submitNote(){
    this.noteservice.addNote(this.note);
    this.router.navigateByUrl('/')
  }
}
