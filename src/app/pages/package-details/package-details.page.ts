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
    { id: 1, name: 'San Andrés', description: 'Incluye tiquetes y hospedaje', image: 'assets/san-andres.png' },
    { id: 2, name: 'Cartagena', description: 'Disfruta de la ciudad amurallada', image: 'assets/cartagena.png' },
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
