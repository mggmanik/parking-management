import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BookingModalComponent } from '../booking-modal/booking-modal.component';

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
    private matSnackbar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchParkingZones();
    // this.fetchParkingSpaces();
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
    this.dashboardService.getParkingSpacesByZoneID({ zoneID: this.zones[index]._id }).subscribe(res => {
      if (res && res.data) {
        console.log(this.filteredSpaces = res.data)
      }
      else {
        this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 })
      }
    })
  }

  openBookingModal(zoneID, spaceID, status) {
    let dialogRef;
    // if (status === 'vacant') {
      dialogRef = this.dialog.open(BookingModalComponent)
    // }
    // else {
    //   dialogRef = this.dialog.open(BookingModalComponent, {
    //     data:
    //   })
    // }

    dialogRef.afterClosed().subscribe(regNum => {
      if (regNum && typeof regNum === 'string') {
        const bookingData = {
          zone_id: zoneID,
          space_id: spaceID,
          registrationNumber: regNum,
          booking_date_time: new Date(),
        }
        console.log(bookingData)
      }
    })
  }

}
