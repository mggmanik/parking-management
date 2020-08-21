import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signUpForm: FormGroup;

  constructor(
    private matSnackbar: MatSnackBar,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initializeLoginForm();
    this.initializeSignUpForm();
  }

  initializeLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/.+\@.+\..+/)]),
      password: new FormControl('', Validators.required)
    })
  }

  initializeSignUpForm() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/.+\@.+\..+/)]),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    })
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.authService.login(this.loginForm.value).subscribe(user => {
        if (user && user.Authorization) {
          // this.router.navigateByUrl('/dashboard');
          console.log(user)
        } else {
          this.matSnackbar.open('Incorrect credentials. Please try again.', 'OK', { duration: 3000 })
        }
      })
    }
    else {
      this.matSnackbar.open('Please fill all mandatory fields !', 'OK', { duration: 3000 })
    }
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
      this.authService.signup(this.signUpForm.value).subscribe(user => {
        if (user && user.Authorization) {
          // this.router.navigateByUrl('/dashboard');
          console.log(user)
        } else {
          this.matSnackbar.open('Incorrect credentials. Please try again.', 'OK', { duration: 3000 })
        }
      })
    }
    else {
      this.matSnackbar.open('Please fill all mandatory fields !', 'OK', { duration: 3000 })
    }
  }

}
