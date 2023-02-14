import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Note} from "../note.model";
import {NoteService} from "../note.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit, OnDestroy{

  noteData!: Note;
  private noteSub!: Subscription;

  constructor(private noteService:NoteService) {}

  ngOnInit() {
    this.noteService.getViewUpdateListener()
      .subscribe((incomingNote: Note) => {
        this.noteData = incomingNote
      })
  }

  ngOnDestroy() {
    this.noteSub.unsubscribe()
  }

}
