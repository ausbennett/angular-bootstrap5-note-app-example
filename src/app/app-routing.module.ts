import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoteCreateComponent} from "./note-create/note-create.component";
import {NoteHomeComponent} from "./note-home/note-home.component";

const routes: Routes = [
  { path: "", component: NoteHomeComponent },
  { path: "create", component: NoteCreateComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
