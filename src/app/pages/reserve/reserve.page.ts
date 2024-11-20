import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.page.html',
  styleUrls: ['./reserve.page.scss'],
})
export class ReservePage implements OnInit {
  package: any;
  reservation = {
    name: '',
    document: '',
    people: 1,
  };

  packages = [
    { id: 1, name: 'San Andrés', price: 1500000, days: '5 días 4 noches' },
    { id: 2, name: 'Cartagena', price: 1200000, days: '4 días 3 noches' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    const id = this.route.snapshot.paramMap.get('id');
    
    // Convertir el id a número
    const numericId = Number(id);

    // Verificar si el id es válido (no NaN)
    if (isNaN(numericId)) {
      console.error('ID no válido:', id);
      return;  // Si el id no es válido, no continuamos con la búsqueda
    }

    // Buscar el paquete correspondiente
    this.package = this.packages.find(pkg => pkg.id === numericId);

    if (!this.package) {
      console.error('Paquete no encontrado para el ID:', numericId);
    }
  }

  confirmReservation() {
    alert(`Reserva confirmada para ${this.reservation.name} en ${this.package.name}`);
    // Aquí puedes guardar la reserva en una base de datos o en localStorage
  }
}
