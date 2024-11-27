import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nacionales',
  templateUrl: './nacionales.page.html',
  styleUrls: ['./nacionales.page.scss'],
})
export class NacionalesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lugares = [
    { id: 1, name: 'Covenas', image: '/assets/covenas.png', price: '1500000' },
    { id: 2, name: 'Amazonas', image: '/assets/amazonas.png', price: '1200000' },
    { id: 3, name: 'Medellin', image: '/assets/medellin.png', price: '1000000' },
    { id: 4, name: 'Desierto de la Tatacoa', image: '/assets/tatacoa.png', price: '800000'},
    { id: 5, name: 'Llanos Orientales', image: '/assets/llanos.png', price: '900000'},
    { id: 6, name: 'Santuario de las Lajas', image: '/assets/lajas.png', price: '700000'}
  ];

}
