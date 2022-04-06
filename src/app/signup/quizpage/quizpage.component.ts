import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoQuestions() {
    this.router.navigate(['/questions']);
  }

}
