import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

 }