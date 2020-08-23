import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularMaterialModule } from '../angular-material.module';
import { HomeComponent } from './home/home.component';
import { ReportRoutingModule } from './report-rotuing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportRoutingModule,
    AngularMaterialModule,
    Ng2SearchPipeModule,
  ]
})
export class ReportsModule { }
