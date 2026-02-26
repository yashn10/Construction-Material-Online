import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../service/userdata.service";

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.component.html',
  styleUrls: ['./electrician.component.scss']
})
export class ElectricianComponent implements OnInit {

  data: any[] = [];
  userloggedin = false;

  private dummyElectrical = [
    {
      _id: 'elec001',
      title: 'Havells 10A Modular Switch Board',
      description: 'Premium modular switch board with flame-retardant material. Available in 6, 8, and 12 module configurations.',
      price: 850,
      image: 'assets/ELE (1).jpeg'
    },
    {
      _id: 'elec002',
      title: 'Fybros Heavy Duty Extension Board',
      description: '6-outlet power strip with surge protection, USB ports, and 3-meter cord. Ideal for home and office use.',
      price: 1200,
      image: 'assets/Fybros.jpg'
    },
    {
      _id: 'elec003',
      title: 'INDRICO LED Panel Light 18W',
      description: 'Ultra-slim ceiling LED panel light with 18W power, cool white 6500K. Energy efficient with 50,000 hours life.',
      price: 650,
      image: 'assets/INDRICO.jpg'
    },
    {
      _id: 'elec004',
      title: 'Polycab FR PVC Insulated Wire 90m',
      description: 'Fire-retardant PVC insulated copper wire. 1.5 sq mm, 90 meters roll. ISI certified for safe wiring.',
      price: 2100,
      image: 'assets/ELE1 (1).jpeg'
    },
    {
      _id: 'elec005',
      title: 'Philips Decorative Chandelier Lamp',
      description: 'Modern crystal chandelier with E27 base. Perfect for living rooms, dining halls and hotel lobbies.',
      price: 4500,
      image: 'assets/Lamp.jpg'
    },
    {
      _id: 'elec006',
      title: 'Anchor Roma Modular Switch Set',
      description: 'Complete Roma modular switch set — 6A switches, sockets, and cover plates in elegant white finish.',
      price: 520,
      image: 'assets/ELE2 (1).jpeg'
    }
  ];

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    const user = localStorage.getItem('User');
    this.userloggedin = !!user;

    this.backend.getelectrical().subscribe(
      (data: any) => {
        this.data = data && data.length > 0 ? data : this.dummyElectrical;
      },
      () => {
        this.data = this.dummyElectrical;
      }
    );
  }
}
