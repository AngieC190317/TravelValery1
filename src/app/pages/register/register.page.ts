import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Para redirigir después del registro
import { AuthService } from '../services/auth.service'; // Servicio de autenticación
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (this.authService.register(this.email, this.password)) {
      alert('Registro exitoso');
      this.router.navigate(['/login']); // Redirige al inicio de sesión
    } else {
      alert('El correo ya está registrado');
    }
  }
}
