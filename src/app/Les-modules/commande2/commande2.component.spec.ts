import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commande2Component } from './commande2.component';

describe('Commande2Component', () => {
  let component: Commande2Component;
  let fixture: ComponentFixture<Commande2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commande2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commande2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
