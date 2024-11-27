import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internacionales',
  templateUrl: './internacionales.page.html',
  styleUrls: ['./internacionales.page.scss'],
})
export class InternacionalesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lugares = [
    { id: 1, name: 'Paris', image: '/assets/paris.png', price: '15000000' },
    { id: 2, name: 'Madrid', image: '/assets/madrid.png', price: '12000000' },
    { id: 3, name: 'Londres', image: '/assets/londres.png', price: '10000000' },
    { id: 4, name: 'Venecia', image: '/assets/venecia.png', price: '8000000'},
    { id: 5, name: 'Grecia', image: '/assets/grecia.png', price: '9000000'},
    { id: 6, name: 'Noruega', image: '/assets/noruega.png', price: '7000000'}
  ];

}
