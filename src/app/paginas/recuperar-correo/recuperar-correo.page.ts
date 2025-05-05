import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recuperar-correo',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './recuperar-correo.page.html',
  styleUrls: ['./recuperar-correo.page.scss']
})
export class RecuperarCorreoPage {
  mostrarMensaje = false;

  enviarCorreo() {
    this.mostrarMensaje = true;

    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 4000);
  }
}
