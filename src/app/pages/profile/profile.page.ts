import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user = {
    name: 'Angie',
    email: 'angie@example.com',
    phone: '1234567890',
  };

  saveProfile() {
    alert('Perfil actualizado correctamente.');
    // Aquí puedes guardar los cambios en localStorage o enviar a un backend.
  }
}
