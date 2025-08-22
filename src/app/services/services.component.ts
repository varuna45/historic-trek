import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService, Fort, Guide } from '../data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  forts: Fort[] = [];
  guides: Guide[] = [];
  availableGuides: Guide[] = [];
  selectedFort: string = '';
  selectedGuide: string = '';
  showMap: { [key: string]: boolean } = {};
  showGuideAssignment: { [key: string]: boolean } = {};

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.forts = this.dataService.getForts();
    this.guides = this.dataService.getGuides();
    this.availableGuides = this.dataService.getAvailableGuides();
  }

  getSafeMapUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  toggleMap(fortId: string) {
    this.showMap[fortId] = !this.showMap[fortId];
  }

  toggleGuideAssignment(fortId: string) {
    this.showGuideAssignment[fortId] = !this.showGuideAssignment[fortId];
    this.availableGuides = this.dataService.getAvailableGuides();
  }

  assignGuide(fortId: string, guideId: string) {
    if (this.dataService.assignGuideToFort(guideId, fortId)) {
      this.availableGuides = this.dataService.getAvailableGuides();
      this.guides = this.dataService.getGuides();
      this.showGuideAssignment[fortId] = false;
      alert('Guide assigned successfully!');
    } else {
      alert('Failed to assign guide.');
    }
  }

  getAssignedGuide(fortId: string): Guide | undefined {
    return this.guides.find(guide => guide.assignedFort === fortId);
  }

  unassignGuide(guideId: string) {
    if (this.dataService.unassignGuide(guideId)) {
      this.availableGuides = this.dataService.getAvailableGuides();
      this.guides = this.dataService.getGuides();
      alert('Guide unassigned successfully!');
    }
  }
}
