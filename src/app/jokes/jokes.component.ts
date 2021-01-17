import { Joke, JokesService } from './jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  jokes = [];
  newQuestion = '';
  newAnswer = '';

  constructor(private jokeService: JokesService) { }

  ngOnInit(): void {
    this.jokes = this.jokeService.getJokes();
  }

  removeJoke(index: number): void {
    this.jokes.splice(index, 1);
  }

  addJoke(newJoke: Joke): void {
    this.jokes.push(newJoke);
    console.log(newJoke);
  }

}
