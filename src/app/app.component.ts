import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { coffee } from './interfaces/coffee.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  coffeeList: coffee[] = [];

  // API

  async getList() {
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
