import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getToken() {
    return JSON.parse(localStorage.getItem('pUser')).Authorization;
  }

  getParkingZones() {
    return this.http.get<any>(`${environment.apiUrl}/parkingzone/list`);
  }

  getParkingSpaces() {
    return this.http.get<any>(`${environment.apiUrl}/parkingspace/list`);
  }
}
