import { Component, Input, Output, EventEmitter } from '@angular/core';
// import * as uuid from 'uuid';
// const myId = uuid.v4();


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
      id: Number(Date.now()),
      question: this.newQuestion,
      answer: this.newAnswer,
    };
    this.jokeCreation.emit(newJoke);
    this.newQuestion = '';
    this.newAnswer = '';
  }
}
