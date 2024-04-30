import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent {

  data: any = []

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    this.furniture();
  }

  furniture() {
    this.backend.getfurniture().subscribe(
      (response) => {
        this.data = response;
      }
    )
  }

}
