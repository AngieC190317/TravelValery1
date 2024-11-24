import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Para redirigir después de la recuperación
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}


   // Función para volver al inicio de sesión
   goToLogin() {
    this.router.navigate(['/login']); // Redirige al inicio de sesión
  }

  async resetPassword() {
    if (!this.email) {
      alert('Por favor, ingresa tu correo electrónico');
      return;
    }

    try {
     await this.authService.resetPassword(this.email);
      alert('Se ha enviado un correo para restablecer tu contraseña.');
    } catch (error) {
      alert('Ocurrió un error. Verifica que el correo esté registrado.');
      console.error(error);
    }
  }
}
