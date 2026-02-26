import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  addcontact(data: any) {
    return this.http.post(`${this.baseUrl}/contact`, data);
  }

  addfeedback(data: any) {
    return this.http.post(`${this.baseUrl}/feedback`, data);
  }

  adduser(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  loginuser(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  getpaints() {
    return this.http.get(`${this.baseUrl}/paint`);
  }

  getelectrical() {
    return this.http.get(`${this.baseUrl}/electrical`);
  }

  getinterior() {
    return this.http.get(`${this.baseUrl}/interior`);
  }

  getfurniture() {
    return this.http.get(`${this.baseUrl}/furniture`);
  }

  getpaintbyid(id: any) {
    return this.http.get(`${this.baseUrl}/paint/${id}`);
  }

  getelectricalbyid(id: any) {
    return this.http.get(`${this.baseUrl}/electrical/${id}`);
  }

  getinteriorbyid(id: any) {
    return this.http.get(`${this.baseUrl}/interior/${id}`);
  }

  getfurniturebyid(id: any) {
    return this.http.get(`${this.baseUrl}/furniture/${id}`);
  }
}
