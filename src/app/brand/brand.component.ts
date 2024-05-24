import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brand: string = '';
  cars: Car[] = [];

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  async ngOnInit(): Promise<void> {
    await this.carService.loadCars();
    this.route.params.subscribe(params => {
      this.brand = params['name'];
      this.cars = this.carService.getCarsByBrand(this.brand);
    });
  }

  getBackgroundColor(available: boolean): string {
  return available ? 'available' : 'unavailable';
}

}
