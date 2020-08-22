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

  index: number;
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

  onReset() {
    this.dashboardService.resetParkingSpaces().subscribe(res => {
      if (res && res.data) {
        this.fetchParkingSpaceByZoneID(this.index);
      }
      else {
        this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 })
      }
    })
  }

  filterParkingSpace(event) {
    this.index = event.index;
    this.fetchParkingSpaceByZoneID(this.index);
  }

  openBookingModal(zoneID, spaceID, regnum) {
    let dialogRef;
    let spaceUpdateData = {};

    if (!regnum) {
      dialogRef = this.dialog.open(BookingModalComponent)
    }
    else {
      dialogRef = this.dialog.open(BookingModalComponent, {
        data: regnum
      })
    }

    dialogRef.afterClosed().subscribe(regNum => {
      if (regNum && typeof regNum === 'string') {

        if (!regnum) {
          spaceUpdateData = {
            status: 'occupied',
            vehicle_reg_num: regNum
          }
        }
        else {
          spaceUpdateData = {
            status: 'vacant',
            vehicle_reg_num: ''
          }
        }

        // remove satatus end to end

        // const bookingData = {
        //   zone_id: zoneID,
        //   space_id: spaceID,
        //   vehicle_reg_num: regNum,
        //   booking_date_time: new Date(),
        // }
        // console.log(bookingData)

        this.dashboardService.updateParkingSpace(spaceID, spaceUpdateData).subscribe(res => {
          if (res && res.data) {
            this.fetchParkingSpaceByZoneID(this.index);
          }
          else {
            this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 })
          }
        })
      }
    })
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

  fetchParkingSpaceByZoneID(i) {
    this.dashboardService.getParkingSpacesByZoneID({ zoneID: this.zones[i]._id }).subscribe(res => {
      if (res && res.data) {
        console.log(this.filteredSpaces = res.data)
      }
      else {
        this.matSnackbar.open('Something went wrong !', 'OK', { duration: 3000 })
      }
    })
  }

}
