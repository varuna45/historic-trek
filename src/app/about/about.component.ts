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
    { name: 'Varuna Kshirsagar' ,role:"ab"},
    { name: 'Purvi Mandlik',role:"cd" },
    { name: 'Siddhi Nagare',role:"ef" },
    { name:'Komal Pacharne',role:"gh"},
    { name:'Sankalp Karkhele',role:"ij"}
  ];
}
