import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'parking-management';
  showHeader = true;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkForTokenOnPageLoad();
        if (window.location.href.includes('login')) {
          this.showHeader = false;
        }
        else if (window.location.href.includes('not-found')) {
          this.showHeader = false;
        }
        else {
          this.showHeader = true;
        }
      }
    })
  }

  checkForTokenOnPageLoad() {
    let user = JSON.parse(localStorage.getItem('pUser'));
    if (user !== null) {
      if (user.Authorization && user.timeStamp) {
        if (moment(new Date()).diff(user.timeStamp, 'hours') < 24) {
          if (window.location.href.includes('login')) {
            this.router.navigateByUrl('/dashboard');
          }
        } else {
          this.authService.logout();
          this.router.navigateByUrl('/auth/login');
        }
      } else {
        this.authService.logout();
        this.router.navigateByUrl('/auth/login');
      }
    }
    else {
      this.authService.logout();
      this.router.navigateByUrl('/auth/login');
    }
  }
}
