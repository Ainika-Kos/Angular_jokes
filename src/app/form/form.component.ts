import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  newQuestion = '';
  newAnswer = '';

  @Output() jokeCreation = new EventEmitter();

  addJoke(): void {
    if (!this.newQuestion || !this.newAnswer) {
      return;
    }
    const newJoke = {
      id: new Date().getTime(),
      question: this.newQuestion,
      answer: this.newAnswer,
    };
    this.jokeCreation.emit(newJoke);
    this.newQuestion = '';
    this.newAnswer = '';
  }
}
