import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteparmoisComponent } from './venteparmois.component';

describe('VenteparmoisComponent', () => {
  let component: VenteparmoisComponent;
  let fixture: ComponentFixture<VenteparmoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteparmoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenteparmoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
