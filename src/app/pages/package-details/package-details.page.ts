import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.page.html',
  styleUrls: ['./package-details.page.scss'],
})
export class PackageDetailsPage implements OnInit {
  package: any;
  packages = [
    { id: 1, name: 'Covenas', image: '/assets/covenas.png', price: '1500000' },
    { id: 2, name: 'Amazonas', image: '/assets/amazonas.png', price: '1200000' },
    { id: 3, name: 'Medellin', image: '/assets/medellin.png', price: '' },
    { id: 4, name: 'Desierto de la Tatacoa', image: '/assets/tatacoa.png', price: ''},
    { id: 5, name: 'Llanos Orientales', image: '/assets/llanos.png', price: ''},
    { id: 4, name: 'Santuario de las Lajas', image: '/assets/lajas.png', price: ''}
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');  // Obtiene el id como string
    const numericId = Number(id);  // Convierte id a un número

    if (isNaN(numericId)) {  // Verifica si no es un número válido
      console.error('ID no válido:', id);
      return;  // Si el id no es válido, no se ejecuta el código de búsqueda
    }

    // Busca el paquete con el id numérico
    this.package = this.packages.find(p => p.id === numericId);

    if (!this.package) {
      console.error('Paquete no encontrado con el id:', numericId);
    }
  }

}
