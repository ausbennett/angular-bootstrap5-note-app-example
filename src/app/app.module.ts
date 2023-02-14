import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteHomeComponent } from './note-home/note-home.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteViewComponent,
    NoteCreateComponent,
    NoteHomeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
