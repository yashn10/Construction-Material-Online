import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../service/userdata.service";

@Component({
  selector: 'app-painter',
  templateUrl: './painter.component.html',
  styleUrls: ['./painter.component.scss']
})
export class PainterComponent implements OnInit {

  paintlist: any[] = [];
  userloggedin = false;

  private dummyPaints = [
    {
      _id: 'paint001',
      title: 'Asian Paints Royale Luxury Emulsion',
      description: 'Premium interior emulsion paint with silk-like smooth finish, stain resistance and superior coverage. Available in 1000+ shades.',
      price: 2850,
      image: 'assets/asian paints.jpg'
    },
    {
      _id: 'paint002',
      title: 'Dulux Velvet Touch Diamond Glow',
      description: 'Diamond Glow finish with advanced stain-guard technology. Perfect for living rooms and bedrooms.',
      price: 3200,
      image: 'assets/dulux paints.jpg'
    },
    {
      _id: 'paint003',
      title: 'Berger Silk Luxury Emulsion',
      description: 'Ultra-premium silk finish paint with anti-bacterial properties. Washable and long-lasting protection.',
      price: 2600,
      image: 'assets/burger paints.jpg'
    },
    {
      _id: 'paint004',
      title: 'Asian Paints Apex Ultima Exterior',
      description: 'Weather-proof exterior paint with 10-year warranty. Resists algae, fungus and water damage.',
      price: 4200,
      image: 'assets/fixit paints.jpg'
    },
    {
      _id: 'paint005',
      title: 'Indigo Paints Metallic Finish',
      description: 'Metallic sheen paint for accent walls and feature areas. Available in gold, silver and bronze shades.',
      price: 3800,
      image: 'assets/painter2 (1).jpeg'
    },
    {
      _id: 'paint006',
      title: 'Nerolac Beauty Smooth Finish',
      description: 'High-quality smooth finish interior paint with excellent coverage and low VOC formula for healthier homes.',
      price: 1950,
      image: 'assets/painter3 (1).jpeg'
    }
  ];

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    const user = localStorage.getItem('User');
    this.userloggedin = !!user;

    this.backend.getpaints().subscribe(
      (data: any) => {
        this.paintlist = data && data.length > 0 ? data : this.dummyPaints;
      },
      () => {
        this.paintlist = this.dummyPaints;
      }
    );
  }
}
