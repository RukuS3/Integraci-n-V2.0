import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recuperar-correo',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './recuperar-correo.page.html',
  styleUrls: ['./recuperar-correo.page.scss']
})
export class RecuperarCorreoPage {}
