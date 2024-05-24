import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];
  brands: string[] = [];
  randomCars: Car[] = [];

  constructor(private carService: CarService) { }

  async ngOnInit(): Promise<void> {
    await this.carService.loadCars();
    this.cars = this.carService.getCars();
    this.brands = this.carService.getBrands();
    this.randomCars = this.carService.getRandomCars(2);
  }

  getBackgroundColor(available: boolean): string {
    return available ? 'bg-success' : 'bg-danger';
  }
  getBrandLogo(brand: string): string {
    switch (brand) {
      case 'Fiat':
        return 'https://upload.wikimedia.org/wikipedia/it/thumb/9/9e/Logo_della_Fiat.svg/800px-Logo_della_Fiat.svg.png';
      case 'Ford':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8DoZ5diYOQIodKRX7Ia4ifvBXGZnr23nUbcmCvzoTw&s';
      case 'Audi':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Audi_logo_detail.svg/1426px-Audi_logo_detail.svg.png';
      default:
        return '';
    }
  }
}
