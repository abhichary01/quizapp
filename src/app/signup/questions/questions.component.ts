import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/Service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public name: string = "";
  public questionList: any=[];
  public currentQuestion: number = 0;
  public points: number = 0;
  public progress: string = "0";
  isQuizompleted: boolean = false;
  counter = 15;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  unattendedAnswer: number = 0;
  interval$:any;
  

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  
  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res => {
      this.questionList = res.questions;
      console.log(this.questionList);
    })
  }
  nextQuestion(){
    this.currentQuestion++
    this.getProgressPercent();
  
  }
  checkAnswer(currentQno:any, answer:any){

    if(currentQno === this.questionList.length){
      this.isQuizompleted = true;
      this.stopCounter();
    }
    if(answer.correct){
      this.points+=100
      this.correctAnswer++;

      setTimeout(()=>{
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      },1000)
  

    }
    // if(this.counter = 0){
    //   this.unattendedAnswer++;
    //   this.currentQuestion++;
    // }
    else{
  setTimeout(()=>{
    this.currentQuestion++;
    this.incorrectAnswer++;
    this.resetCounter();
    this.getProgressPercent();
  },1000)

    }
      
  }
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.counter=15;
        this.currentQuestion++;
        this.unattendedAnswer++;
        this.getProgressPercent();
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe()
    },75000)
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter = 15;
    this.startCounter();
  }
  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString()
    return this.progress;
  }
  finalPage(): void{
   console.log('quiz over')
  }

}


