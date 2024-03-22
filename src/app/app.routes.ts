import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCoffeeComponent } from './pages/add-coffee/add-coffee.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'addCoffee', component: AddCoffeeComponent },
];
