import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  zones = [];
  spaces = [];
  filteredSpaces = [];

  constructor(
    private dashboardService: DashboardService,
    private matSnackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchParkingZones();
    this.fetchParkingSpaces();
  }

  fetchParkingZones() {
    this.dashboardService.getParkingZones().subscribe(res => {
      if (res && res.data) {
        console.log(this.zones = res.data)
      }
      else {
        this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 })
      }
    })
  }

  fetchParkingSpaces() {
    this.dashboardService.getParkingSpaces().subscribe(res => {
      if (res && res.data) {
        console.log(this.spaces = res.data)
      }
      else {
        this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 })
      }
    })
  }

  filterParkingSpace(event) {
    const index = event.index;
    this.filteredSpaces = this.spaces.filter(space => space.zone_id === this.zones[index]._id);
    console.log(this.filteredSpaces)
  }

}
