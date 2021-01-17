import { Joke, JokesService } from '../jokes/jokes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent implements OnInit {
  id: string;
  joke: Joke;
  constructor(
    private route: ActivatedRoute,
    private jokesService: JokesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.joke = this.jokesService.getJoke(Number(params.id)))
    );

    /*
    this.params = this.route.paramMap.pipe(
      tap(params => console.log(params.get('id')))
    ); */
  }
}
