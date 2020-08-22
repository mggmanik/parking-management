import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { BookingModalComponent } from './booking-modal/booking-modal.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent, BookingModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
