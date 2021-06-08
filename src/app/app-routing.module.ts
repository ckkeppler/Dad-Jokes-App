import { AstPath } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetJokeComponent } from './get-joke/get-joke.component';
import { SavedJokesComponent } from './saved-jokes/saved-jokes.component';

const routes: Routes = [
  { path: '', component: GetJokeComponent },
  { path: 'get-joke', component: GetJokeComponent },
  { path: 'saved-jokes', component: SavedJokesComponent },
  { path: '**', component: GetJokeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
