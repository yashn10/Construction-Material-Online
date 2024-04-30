import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  // https://construction-api-c904.onrender.com/contact


  addcontact(data: any) {
    return this.http.post('http://localhost:5000/contact', data);
  }

  addfeedback(data: any) {
    return this.http.post('http://localhost:5000/feedback', data);
  }

  adduser(data: any) {
    return this.http.post('http://localhost:5000/register', data);
  }

  loginuser(data: any) {
    return this.http.post('http://localhost:5000/login', data);
  }

  getpaints() {
    return this.http.get('http://localhost:5000/paint');
  }

  getelectrical() {
    return this.http.get('http://localhost:5000/electrical');
  }

  getinterior() {
    return this.http.get('http://localhost:5000/interior');
  }

  getfurniture() {
    return this.http.get('http://localhost:5000/furniture');
  }

  getpaintbyid(id: any) {
    return this.http.get(`http://localhost:5000/paint/${id}`);
  }

  getelectricalbyid(id: any) {
    return this.http.get(`http://localhost:5000/electrical/${id}`);
  }

  getinteriorbyid(id: any) {
    return this.http.get(`http://localhost:5000/interior/${id}`);
  }

  getfurniturebyid(id: any) {
    return this.http.get(`http://localhost:5000/furniture/${id}`);
  }


}
