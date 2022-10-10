import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiCreateComponent } from './wiki/wiki-create/wiki-create.component';
import { WikiEditComponent } from './wiki/wiki-edit/wiki-edit.component';
import { WikiSingleComponent } from './wiki/wiki-single/wiki-single.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  { path: 'wiki', component: WikiComponent },
  { path: 'wiki/create', component: WikiCreateComponent },
  { path: 'wiki/:id', component: WikiSingleComponent },
  { path: 'wiki/:id/edit', component: WikiEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
