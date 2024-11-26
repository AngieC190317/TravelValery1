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

  // Obtener los datos del usuario autenticado
  getUser() {
    return this.afAuth.authState; // Devuelve un Observable con el estado del usuario
  }

  // Método para iniciar sesión con correo y contraseña
  async login(email: string, password: string): Promise<boolean> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('Inicio de sesión exitoso:', userCredential.user);
      return true; // Credenciales válidas
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false; // Credenciales incorrectas
    }
  }



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


   // Registrar usuario con correo y contraseña
   async register(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('Usuario registrado exitosamente:', email);
    } catch (error: any) {
      // Captura los errores específicos de Firebase
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('El correo ya está registrado.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('La clave debe tener al menos 6 caracteres.');
      } else {
        throw error; // Lanza otros errores no manejados
      }
    }
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
