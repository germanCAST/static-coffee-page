import { Injectable } from '@angular/core';
import { coffee } from '../../interfaces/coffee.interface';

@Injectable({
  providedIn: 'root',
})
export class ListerApiService {
  constructor() {}

  public coffeeList: coffee[] = [];

  // API

  public async getList() {
    const baseUrl: string =
      'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';
    await fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element: any) => {
          this.coffeeList.push(element);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
