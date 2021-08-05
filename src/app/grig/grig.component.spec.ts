import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrigComponent } from './grig.component';

describe('GrigComponent', () => {
  let component: GrigComponent;
  let fixture: ComponentFixture<GrigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
