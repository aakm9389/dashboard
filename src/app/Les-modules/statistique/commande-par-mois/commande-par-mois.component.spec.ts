import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeParMoisComponent } from './commande-par-mois.component';

describe('CommandeParMoisComponent', () => {
  let component: CommandeParMoisComponent;
  let fixture: ComponentFixture<CommandeParMoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeParMoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeParMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
