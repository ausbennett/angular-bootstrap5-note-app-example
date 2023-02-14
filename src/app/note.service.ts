import { Injectable } from '@angular/core';
import {Note} from "./note.model";
import {Observable, Observer, Subject} from "rxjs";


@Injectable({ providedIn: 'root'})
export class NoteService {


  constructor() {}

  private notes:Note[] = [
    {title:"Elliot farted", date:"Feb 11 2023", body:"Today Elliot farted, it was stiiinky"},
    {title:"Jaime farted", date:"Mar 11 2023", body:"Today Jaime farted, it was stiiinky"},
    {title:"I farted", date:"Apr 11 2023", body:"Today I farted, it was stiiinky"}
  ]
  private notesUpdated = new Subject<Note[]>();
  private viewNote = new Subject<Note>();

  noteToView:Note = {title: "No Title", date: "Jan 1 1999", body: "No body, only head ;)"}

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
