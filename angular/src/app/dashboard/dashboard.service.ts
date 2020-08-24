import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // fetch parking zones
  getParkingZones() {
    let token = this.getToken();
    return this.http.get<any>(`${environment.apiUrl}/parkingzone/list`,
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      });
  }

  // fetch parking spaces by parking zone ID
  getParkingSpacesByZoneID(data) {
    let token = this.getToken();
    return this.http.post<any>(`${environment.apiUrl}/parkingspace/filter`,
      data,
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    )
  }

  // update single parking space
  updateParkingSpace(id, data) {
    let token = this.getToken();
    return this.http.put<any>(`${environment.apiUrl}/parkingspace/update/${id}`,
      data,
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    )
  }

  // reset parking spaces
  resetParkingSpaces() {
    let token = this.getToken();
    const data = {
      vehicle_reg_num: ''
    }
    return this.http.put<any>(`${environment.apiUrl}/parkingspace/updateAll`,
      data,
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      })
  }

  // create vehicle parking booking
  createVehicleParking(data) {
    let token = this.getToken();
    return this.http.post<any>(`${environment.apiUrl}/vehicleparking/create`,
      data,
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    )
  }

  // update vehicle parking booking to enter release date time
  updateVehicleParking(id, data) {
    let token = this.getToken();
    return this.http.put<any>(`${environment.apiUrl}/vehicleparking/update/${id}`,
      data,
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    )
  }

  // remove all vehicle parking bookings from the table
  deleteAllVehicleParkings() {
    let token = this.getToken();
    return this.http.delete<any>(`${environment.apiUrl}/vehicleparking/deleteAll`,
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    )
  }
}
