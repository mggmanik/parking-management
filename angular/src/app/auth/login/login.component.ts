import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private matSnackbar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/.+\@.+\..+/)]),
      password: new FormControl('', Validators.required)
    })
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(user => {
        if (user && user.Authorization) {
          this.router.navigateByUrl('/dashboard');
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
