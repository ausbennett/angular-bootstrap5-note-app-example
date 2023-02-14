import { Injectable } from '@angular/core';
import {Note} from "./note.model";
import {Observable, Observer, Subject} from "rxjs";


@Injectable({ providedIn: 'root'})
export class NoteService {


  constructor() {}

  private notes:Note[] = [
    {title:"The Weather", date:"Feb 14 2023", body:"Today is valentines day, and the weather is nice."},
    {title:"Chung-chun", date:"Mar 11 2023", body:"Got a gamsung chung-chun rice dog today, it was delicious :)"},
    {title:"Got my MBP", date:"Feb 8 2023", body:"Today I got my MBP, it is amazing!"}
  ]
  private notesUpdated = new Subject<Note[]>();
  private viewNote = new Subject<Note>();

  getNotes(){ return [...this.notes]}

  getNoteUpdateListener(){return this.notesUpdated.asObservable()}
  getViewUpdateListener(){return this.viewNote.asObservable()}

  updateViewNote(note: Note){
    this.viewNote.next(note)
  }

  addNote(note: Note){
    this.notes.push(note)
    this.notesUpdated.next([...this.notes])
  }

}
