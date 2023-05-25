import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Achat2Component } from './achat2.component';

describe('Achat2Component', () => {
  let component: Achat2Component;
  let fixture: ComponentFixture<Achat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Achat2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Achat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
