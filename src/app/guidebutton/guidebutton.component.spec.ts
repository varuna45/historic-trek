import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidebuttonComponent } from './guidebutton.component';

describe('GuidebuttonComponent', () => {
  let component: GuidebuttonComponent;
  let fixture: ComponentFixture<GuidebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidebuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
