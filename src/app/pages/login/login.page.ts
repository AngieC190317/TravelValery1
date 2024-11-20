import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  passwordType: string = 'password'; // Estado inicial de la contraseña oculta
  constructor(private router: Router) {}
 // Función para alternar la visibilidad de la contraseña
 togglePassword() {
  this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
}
  login() {
    if (this.username && this.password) {
      // Aquí iría la lógica para autenticar al usuario, por ejemplo, con una API.
      alert(`Iniciando sesión con ${this.username}`);
      // Si la autenticación es exitosa, redirige al usuario
      this.router.navigate(['/tabs']);
    } else {
      alert('Por favor, ingresa tus datos.');
    }
  }
}
