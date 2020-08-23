import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) { }

  getToken() {
    return JSON.parse(localStorage.getItem('pUser')).Authorization;
  }

  fetchReports(data) {
    let token = this.getToken();
    return this.http.post<any>(`${environment.apiUrl}/vehicleparking/reports`,
      data,
      {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    )
  }

}
