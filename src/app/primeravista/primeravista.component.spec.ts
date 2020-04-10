import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeravistaComponent } from './primeravista.component';

describe('PrimeravistaComponent', () => {
  let component: PrimeravistaComponent;
  let fixture: ComponentFixture<PrimeravistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeravistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeravistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
