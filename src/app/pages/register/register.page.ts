import { Component } from '@angular/core';

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

  constructor() {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!this.fullName || !this.email || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    alert(`Registro exitoso para ${this.fullName}`);
    // Aquí puedes agregar lógica para guardar los datos en una base de datos
  }
}
