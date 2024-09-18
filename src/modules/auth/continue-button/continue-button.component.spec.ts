import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueButtonComponent } from './continue-button.component';

describe('ContinueButtonComponent', () => {
  let component: ContinueButtonComponent;
  let fixture: ComponentFixture<ContinueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
