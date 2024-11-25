import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: firebase.User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Suscribirse al estado de autenticación del usuario
    this.authService.getUser().subscribe((user) => {
      this.user = user; // Aquí obtenemos la información del usuario
    });
  }
}
