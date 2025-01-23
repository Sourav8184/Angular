import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    isTermAgree: new FormControl(false),
  });

  onSubmit() {
    const formData = this.userForm.value;
    console.log(formData);
  }
}
