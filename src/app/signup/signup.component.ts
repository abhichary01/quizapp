import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;

  form!: FormGroup;
  @ViewChild('name') nameKey!: ElementRef;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
    })
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  }

  startQuiz() {
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
