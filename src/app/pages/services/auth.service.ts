//servicio de autenticación

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'univalle@gmail.com', password: '123456' }, // Datos de ejemplo
  ];

  constructor() {}

  // Función para verificar las credenciales del usuario
  login(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    return user !== undefined;
  }

  // Función para registrar un nuevo usuario
  register(email: string, password: string): boolean {
    if (this.users.some((user) => user.email === email)) {
      return false; // Si ya existe un usuario con ese correo
    }
    this.users.push({ email, password });
    return true;
  }
}
