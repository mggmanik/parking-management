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

  getParkingZones() {
    let token = this.getToken();
    return this.http.get<any>(`${environment.apiUrl}/parkingzone/list`,
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      });
  }

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
