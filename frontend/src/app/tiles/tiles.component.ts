import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {

  data: any = [];
  userloggedin = false;

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    this.interior();

    const user = localStorage.getItem('User');
    if (user) {
      this.userloggedin = true
    } else {
      this.userloggedin = false
    }
  }

  interior() {
    this.backend.getinterior().subscribe(
      (response) => {
        this.data = response;
      }
    )
  }

}
