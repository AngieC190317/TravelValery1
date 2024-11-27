import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasadia',
  templateUrl: './pasadia.page.html',
  styleUrls: ['./pasadia.page.scss'],
})
export class PasadiaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lugares = [
    { id: 1, name: 'Termales de Santa Rosa', image: '/assets/termales.png', price: '300000' },
    { id: 2, name: 'Parque del Cafe', image: '/assets/parquecafe.png', price: '500000' },
    { id: 3, name: 'Panaca', image: '/assets/panaca.png', price: '400000' },
    { id: 4, name: 'Salento - Cocora', image: '/assets/salento.png', price: '500000'},
    { id: 5, name: 'Parque Arrieros', image: '/assets/arrieros.png', price: '250000'},
  ];

}
