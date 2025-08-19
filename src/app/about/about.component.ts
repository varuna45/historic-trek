import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 authors = [
    { name: 'Varuna Kshirsagar' },
    { name: 'Purvi Mandlik' },
    { name: 'Komal Pacharne' },
    { name: 'Siddhi Nagare' }
  ];
}
