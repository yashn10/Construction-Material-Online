import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userEmail: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const user = localStorage.getItem('User');
    if (user) {
      this.userEmail = user;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
