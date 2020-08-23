import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent implements OnInit {

  registrationNumber = new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{2}[0-9]{1,2}([A-Z])([A-Z]*)[0-9]{4}$/)]);
  
  constructor(
    private matSnackbar: MatSnackBar,
    private dialogRef: MatDialogRef<BookingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.registrationNumber.patchValue(this.data);
    }
  }

  saveBooking() {
    if (this.registrationNumber.valid) {
      this.dialogRef.close(this.registrationNumber.value);
    }
    else {
      this.matSnackbar.open('Please fill valid registration number!', 'OK', { duration: 3000 });
    }
  }

}
