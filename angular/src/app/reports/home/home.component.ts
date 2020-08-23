import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText: string;
  currentDate = new Date();
  startDate = moment(this.currentDate.setHours(0, 0, 0, 0)).toISOString(true);
  endDate = moment(this.currentDate.setHours(0, 0, 0, 0)).add(1, 'days').toISOString(true);
  reports = [];

  constructor(
    private reportService: ReportService,
    private matSnackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getReports({ start: this.startDate, end: this.endDate });
  }

  onSelectBookingDate(event) {
    if (event && event.target && event.target.value) {
      this.startDate = moment(event.target.value).toISOString(true);
      this.endDate = moment(event.target.value).add(1, 'days').toISOString(true);
      this.getReports({ start: this.startDate, end: this.endDate });
    }
  }

  sortOnBookingTime() {
    this.reports.sort((a, b) => new Date(b.booking_date_time).valueOf() - new Date(a.booking_date_time).valueOf());
  }

  getReports(data) {
    this.reportService.fetchReports(data).subscribe(res => {
      if (res && res.data) {
        this.reports = res.data;
      }
      else {
        this.matSnackbar.open('Something went wrong!', 'OK', { duration: 3000 })
      }
    })
  }

}
