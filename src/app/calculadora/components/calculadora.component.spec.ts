import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { calculatorService } from './../services/calculadora.service';
import { calculatorComponent } from './calculadora.component';

describe('calculatorComponent', () => {
  let component: calculatorComponent;
  let fixture: ComponentFixture<calculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [calculatorComponent],
      providers: [calculatorService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(calculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
