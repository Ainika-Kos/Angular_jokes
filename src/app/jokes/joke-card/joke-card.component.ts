import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../jokes.service';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent {
  showAnswer = false;
  @Input() joke: Joke;
  @Output() jokeDeletion = new EventEmitter();

  removeJoke(): void {
    this.jokeDeletion.emit();
  }

}
