import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdayweatherComponent } from './ndayweather.component';

describe('NdayweatherComponent', () => {
  let component: NdayweatherComponent;
  let fixture: ComponentFixture<NdayweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdayweatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdayweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
