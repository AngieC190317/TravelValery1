//servicio de autenticación

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private users = [
    { email: 'univalle@gmail.com', password: '123456' }, // Datos de ejemplo
  ];

constructor(private afAuth: AngularFireAuth) {}

// Iniciar sesión con Google
async loginWithGoogle(): Promise<firebase.User | null> {
  try {
    const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log('Usuario autenticado:', result.user);
    return result.user; // Retorna los datos del usuario autenticado
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
}

 // Cerrar sesión
 async logout(): Promise<void> {
  await this.afAuth.signOut();
  console.log('Cierre de sesión exitoso');
}

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

    // Enviar correo de restablecimiento de contraseña
    async resetPassword(email: string): Promise<void> {
      try {
        await this.afAuth.sendPasswordResetEmail(email);
        console.log('Correo de restablecimiento enviado a:', email);
      } catch (error) {
        console.error('Error al enviar correo de restablecimiento:', error);
        throw error;
      }
    }
}
