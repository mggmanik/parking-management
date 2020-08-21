import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    // login
    login(data) {
        return this.http.post<any>(`${environment.apiUrl}/auth/login`, data).
            pipe(map(user => {
                if (user && user.Authorization) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    let objectToSave = {
                        ...user,
                        timeStamp: new Date()
                    }
                    localStorage.setItem('pUser', JSON.stringify(objectToSave));
                }
                return user;
            }));
    }

    // signup
    signup(data) {
        return this.http.post<any>(`${environment.apiUrl}/auth/signup`, data).
            pipe(map(user => {
                if (user && user.Authorization) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    let objectToSave = {
                        ...user,
                        timeStamp: new Date()
                    }
                    localStorage.setItem('pUser', JSON.stringify(objectToSave));
                }
                return user;
            }));
    }

    // logout
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('pUser');
    }
}