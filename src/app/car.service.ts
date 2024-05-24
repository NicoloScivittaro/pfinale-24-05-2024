import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [];

  constructor() {
    this.loadCars();
  }

  async loadCars() {
    const response = await fetch('../assets/db.json');
    this.cars = await response.json();
  }

  getCars(): Car[] {
    return this.cars;
  }

  getBrands(): string[] {
    return [...new Set(this.cars.map(car => car.brand))];
  }

  getCarsByBrand(brand: string): Car[] {
    return this.cars.filter(car => car.brand === brand);
  }

  getCarsByBrandAndModel(brand: string, model: string): Car[] {
    return this.cars.filter(car => car.brand === brand && car.model === model);
  }

  getRandomCars(count: number): Car[] {
    const shuffled = [...this.cars].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
