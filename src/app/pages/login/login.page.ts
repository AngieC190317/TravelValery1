import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  passwordType: string = 'password'; // Estado inicial de la contraseña oculta

  constructor(private authService: AuthService, private router: Router) {}

 // Función para alternar la visibilidad de la contraseña
 togglePassword() {
  this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
}

goToRegister() {
  this.router.navigate(['/register']); // Cambia "/register" según la ruta de tu página de registro
}

login() {
  if (this.authService.login(this.username, this.password)) {
    // Si las credenciales son correctas, navegar a la página principal o dashboard
    this.router.navigate(['/tabs']);
  } else {
    alert('Credenciales incorrectas');
  }
}

//Funcion para iniciar sesion con google
async loginWithGoogle() {
  try {
    const user = await this.authService.loginWithGoogle();
    if (user) {
      console.log('Inicio de sesión exitoso:', user);
      this.router.navigate(['/tabs']); // Redirige al home después del inicio de sesión
    }
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error);
  }
}
}
