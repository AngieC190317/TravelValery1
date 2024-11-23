import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Para redirigir después de la recuperación

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private router: Router) {}

  resetPassword() {
    if (this.email) {
      alert(`Instrucciones de recuperación enviadas a ${this.email}`);
      this.router.navigate(['/login']); // Redirige al login después de la recuperación
    } else {
      alert('Por favor ingresa tu correo electrónico');
    }
  }

   // Función para volver al inicio de sesión
   goToLogin() {
    this.router.navigate(['/login']); // Redirige al inicio de sesión
  }
}
