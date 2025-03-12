import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseingLocationComponent } from './houseing-location.component';

describe('HouseingLocationComponent', () => {
  let component: HouseingLocationComponent;
  let fixture: ComponentFixture<HouseingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseingLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
