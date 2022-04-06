import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './signup/questions/questions.component';
import { QuizpageComponent } from './signup/quizpage/quizpage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '',        component: SignupComponent},
  {path: 'quiz',        component: QuizpageComponent},
  {path: 'questions',        component: QuestionsComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
