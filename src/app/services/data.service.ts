import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    this.questions = [
      {
        text:'What do you do today Malder?',
        answer: 'Nothing. Sleep and Yoga',
        hide: true
      },
      {
        text:'Do you know Laura Palmer?',
        answer: 'She was a most popular person in school',
        hide:true
      },
      {
        text:'Agent Cooper was here?',
        answer: 'He`s disappeared..',
        hide:true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }

}
