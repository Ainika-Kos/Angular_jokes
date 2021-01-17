import { Injectable } from "@angular/core";

export interface Joke {
  id: number;
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  jokes = [
    {
      id: 1,
      question: 'Why UI is like a joke?',
      answer: 'If you have to explain it, it\'s not that good',
    },
    {
      id: 2,
      question: 'What is algorithm?',
      answer: 'Word used by programmes when they do not want to explain what they did',
    },
    {
      id: 3,
      question: 'What do computers and air conditioners have in common?',
      answer: 'They both become useless when you open windows',
    },
    {
      id: 4,
      question: 'Why programmer never tells the same joke twice?',
      answer: 'He has a DRY sense of humor.',
      showAnswer: false,
    },
    {
      id: 5,
      question: 'What did the HTML coding dog say?',
      answer: 'Href Href!',
    },
    {
      id: 6,
      question: 'How did the JavaScript developer learn TypeScript so quickly?',
      answer: 'Because they coded anyTime, anyPlace, and anyWhere',
    }
  ];

  getJokes(): Joke[] {
    return [...this.jokes];
  }

  getJoke(id: number): Joke {
    return this.jokes.find((it) => it.id === id);
  }
}
