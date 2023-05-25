import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventaire2Component } from './inventaire2.component';

describe('Inventaire2Component', () => {
  let component: Inventaire2Component;
  let fixture: ComponentFixture<Inventaire2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inventaire2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inventaire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
