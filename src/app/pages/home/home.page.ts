import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  categories = ['Nacionales', 'Internacionales', 'Pasadía'];
  featuredTrips = [
    { id: 1, name: 'San Andrés', price: 1500000, image: 'assets/san-andres.jpg' },
    { id: 2, name: 'Cartagena', price: 1200000, image: 'assets/cartagena.jpg' },
  ];
}
