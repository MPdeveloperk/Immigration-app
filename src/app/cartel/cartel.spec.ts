import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartel } from './cartel';

describe('Cartel', () => {
  let component: Cartel;
  let fixture: ComponentFixture<Cartel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
