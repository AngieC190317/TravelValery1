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

  async register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      await this.authService.register(this.email, this.password);
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.fullName = '';
  
      this.router.navigate(['/login']); // Redirige al login después del registro
    } catch (error: any) {
      if (error.message === 'La clave debe tener al menos 6 caracteres.') {
        alert('La clave debe tener mínimo 6 caracteres.');
      } else if (error.message === 'El correo ya está registrado.') {
        alert('Este correo ya se encuentra registrado. Si no recuerda su contraseña, puede recuperarla desde el enlace de "Olvidé mi contraseña".');
      } else {
        alert('Hubo un error al registrarte. Por favor, inténtalo nuevamente.');
        console.error(error);
      }
    }
  }
}
