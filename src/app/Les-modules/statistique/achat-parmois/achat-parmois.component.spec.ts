import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatParmoisComponent } from './achat-parmois.component';

describe('AchatParmoisComponent', () => {
  let component: AchatParmoisComponent;
  let fixture: ComponentFixture<AchatParmoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatParmoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatParmoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
