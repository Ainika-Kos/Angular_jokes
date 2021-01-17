import { JokeComponent } from './joke/joke.component';
import { JokesComponent } from './jokes/jokes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'jokes', pathMatch: 'full', component: JokesComponent },
  { path: 'jokes/:id', component: JokeComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'jokes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
