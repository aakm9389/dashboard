import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreClientComponent } from './nombre-client.component';

describe('NombreClientComponent', () => {
  let component: NombreClientComponent;
  let fixture: ComponentFixture<NombreClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
