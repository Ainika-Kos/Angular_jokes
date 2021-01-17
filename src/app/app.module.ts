import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { AboutComponent } from './about/about.component';
import { JokeComponent } from './joke/joke.component';
import { JokeCardComponent } from './jokes/joke-card/joke-card.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    AboutComponent,
    JokeComponent,
    JokeCardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
