import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Guide, Fort } from '../data.service';

@Component({
  selector: 'app-guidebutton',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guidebutton.component.html',
  styleUrl: './guidebutton.component.css'
})
export class GuidebuttonComponent implements OnInit {
  guides: Guide[] = [];
  forts: Fort[] = [];
  availableGuides: Guide[] = [];
  assignedGuides: Guide[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.guides = this.dataService.getGuides();
    this.forts = this.dataService.getForts();
    this.availableGuides = this.guides.filter(g => g.available);
    this.assignedGuides = this.guides.filter(g => !g.available);
  }

  getFortName(fortId: string): string {
    const fort = this.forts.find(f => f.id === fortId);
    return fort ? fort.name : 'Unknown Fort';
  }

  unassignGuide(guideId: string) {
    if (this.dataService.unassignGuide(guideId)) {
      this.guides = this.dataService.getGuides();
      this.availableGuides = this.guides.filter(g => g.available);
      this.assignedGuides = this.guides.filter(g => !g.available);
      alert('Guide unassigned successfully!');
    }
  }

  getAverageRating(): string {
    return (this.guides.reduce((sum, g) => sum + g.rating, 0) / this.guides.length).toFixed(1);
  }
}