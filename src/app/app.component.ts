import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  @ViewChild('assignmentForm') assignmentForm: NgForm;

  assignmentSubmitted = false;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  subscriptionArr = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Basic';
  assignmentUser = {
    email: '',
    subscriptionPlan: '',
    password: '',
  };
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  submitted = false;

  // onSubmit(f: HTMLFormElement) {
  //   console.log(f);
  // }

  // now we can access that form javascript object that angular created
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  //this works aswell

  onSubmitAssignment() {
    this.assignmentUser.email =
      this.assignmentForm.value.assignmentData.emailAddress;
    this.assignmentUser.subscriptionPlan =
      this.assignmentForm.value.assignmentData.subscription;
    this.assignmentSubmitted = true;
    this.assignmentUser.password =
      this.assignmentForm.value.assignmentData.password;
    this.assignmentForm.reset();
  }
  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    // can also pass the same object as in setValue() to reset() which will then reset to specific values
    this.signupForm.reset();
  }

  // approach to pre-populate form
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this approach will reset form at any change
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    // this will only replace/pre-populate certain fields
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
}
