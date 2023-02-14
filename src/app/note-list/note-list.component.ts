import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Note} from "../note.model";
import {NoteService} from "../note.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnDestroy{

  notes:Note[] = []
  private notesSub!: Subscription;

  constructor(private noteService:NoteService) {}

  ngOnInit() {
    this.notes = this.noteService.getNotes()
    this.notesSub = this.noteService.getNoteUpdateListener()
      .subscribe((incomingNotes: Note[]) => {
        this.notes = incomingNotes
      })
  }

  ngOnDestroy() {
    this.notesSub.unsubscribe()
  }

  viewNote(note: Note){
    this.noteService.updateViewNote(note)
  }
}
