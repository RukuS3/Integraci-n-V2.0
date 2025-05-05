import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  
  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  recuperarCorreo() {
    // Aquí podrías redirigir a una página o abrir un modal
    console.log("Recuperar correo");
  }
  
  resetPassword() {
    // Aquí podrías redirigir a una página o abrir un modal
    console.log("Recuperar contraseña");
  }
  

  login() {
    // Aquí haces la validación real con tu API o servicio
    if (this.email === 'medico@demo.com' && this.password === '1234') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
  mostrarMensaje = false;

  entrar() {
    this.mostrarMensaje = true;

    // Aquí podrías agregar lógica real más adelante...
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000); // Oculta el mensaje después de 3 segundos
  }
}
function login() {
  throw new Error('Function not implemented.');
}

