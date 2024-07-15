import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.component.html',
  styleUrls: ['./electrician.component.scss']
})
export class ElectricianComponent implements OnInit {

  data: any = []
  userloggedin = false

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    this.electrical();

    const user = localStorage.getItem('User');
    if (user) {
      this.userloggedin = true
    } else {
      this.userloggedin = false
    }
  }

  electrical() {
    this.backend.getelectrical().subscribe(
      (response) => {
        this.data = response;
      }
    )
  }

}
