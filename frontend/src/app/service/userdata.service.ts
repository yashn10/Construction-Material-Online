import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }


  addcontact(data: any) {
    return this.http.post('http://localhost:5000/contact', data);
  }

  addfeedback(data: any) {
    return this.http.post('http://localhost:5000/feedback', data);
  }

  adduser(data: any) {
    return this.http.post('http://localhost:5000/register', data);
  }


}
