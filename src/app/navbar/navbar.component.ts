import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  brands: string[] = [];

  constructor(private carService: CarService) { }

  async ngOnInit(): Promise<void> {
    await this.carService.loadCars();
    this.brands = this.carService.getBrands();
  }
}
