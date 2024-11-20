import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications = [
    {
      title: '¡Recordatorio!',
      message: 'Tienes una reserva para San Andrés el 01/DIC/2024.',
    },
    {
      title: '¡Oferta Especial!',
      message: 'Reserva hoy y obtén un 15% de descuento en tu próxima aventura submarina.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

