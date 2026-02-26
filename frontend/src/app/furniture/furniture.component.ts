import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../service/userdata.service";

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {

  data: any[] = [];
  userloggedin = false;

  private dummyFurniture = [
    {
      _id: 'furn001',
      title: 'Royal Oak King Size Bed Set',
      description: 'Solid sheesham wood king size bed with hydraulic storage. Includes 2 side tables. Natural honey finish.',
      price: 32000,
      image: 'assets/bed.jpg'
    },
    {
      _id: 'furn002',
      title: 'Premium L-Shaped Sofa Set',
      description: 'Luxury L-shaped sofa with premium fabric upholstery. 6-seater with adjustable headrests and storage ottoman.',
      price: 45000,
      image: 'assets/sofa.jpg'
    },
    {
      _id: 'furn003',
      title: 'Modern Dining Table 6-Seater',
      description: 'Contemporary dining table set with 6 upholstered chairs. Tempered glass top with solid wood legs.',
      price: 28000,
      image: 'assets/dining.jpg'
    },
    {
      _id: 'furn004',
      title: 'Executive Wardrobe 3-Door',
      description: 'Spacious 3-door wardrobe with mirror, shelves, and hanging space. Engineered wood with laminate finish.',
      price: 18500,
      image: 'assets/almari.jpg'
    },
    {
      _id: 'furn005',
      title: 'Ergonomic Office Chair',
      description: 'High-back ergonomic office chair with lumbar support, adjustable height, and breathable mesh fabric.',
      price: 8500,
      image: 'assets/chair.jpg'
    },
    {
      _id: 'furn006',
      title: 'Modular Kitchen Cabinet Set',
      description: 'Complete modular kitchen cabinet set with soft-close hinges. Marine plywood with acrylic finish.',
      price: 55000,
      image: 'assets/kitchen.jpg'
    }
  ];

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    const user = localStorage.getItem('User');
    this.userloggedin = !!user;

    this.backend.getfurniture().subscribe(
      (data: any) => {
        this.data = data && data.length > 0 ? data : this.dummyFurniture;
      },
      () => {
        this.data = this.dummyFurniture;
      }
    );
  }
}
