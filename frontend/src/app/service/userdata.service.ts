import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  // https://construction-api-c904.onrender.com/contact


  addcontact(data: any) {
    return this.http.post('https://construction-api-c904.onrender.com/contact', data);
  }

  addfeedback(data: any) {
    return this.http.post('https://construction-api-c904.onrender.com/feedback', data);
  }

  adduser(data: any) {
    return this.http.post('https://construction-api-c904.onrender.com/register', data);
  }

  loginuser(data: any) {
    return this.http.post('https://construction-api-c904.onrender.com/login', data);
  }

  getpaints() {
    return this.http.get('https://construction-api-c904.onrender.com/paint');
  }

  getelectrical() {
    return this.http.get('https://construction-api-c904.onrender.com/electrical');
  }

  getinterior() {
    return this.http.get('https://construction-api-c904.onrender.com/interior');
  }

  getfurniture() {
    return this.http.get('https://construction-api-c904.onrender.com/furniture');
  }

  getpaintbyid(id: any) {
    return this.http.get(`https://construction-api-c904.onrender.com/paint/${id}`);
  }

  getelectricalbyid(id: any) {
    return this.http.get(`https://construction-api-c904.onrender.com/electrical/${id}`);
  }

  getinteriorbyid(id: any) {
    return this.http.get(`https://construction-api-c904.onrender.com/interior/${id}`);
  }

  getfurniturebyid(id: any) {
    return this.http.get(`https://construction-api-c904.onrender.com/furniture/${id}`);
  }


}
