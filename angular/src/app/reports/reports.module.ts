import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { HomeComponent } from './home/home.component';
import { ReportRoutingModule } from './report-rotuing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportRoutingModule,
    AngularMaterialModule,
    Ng2SearchPipeModule
  ]
})
export class ReportsModule { }
