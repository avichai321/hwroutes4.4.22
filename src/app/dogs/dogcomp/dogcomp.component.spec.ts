import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogcompComponent } from './dogcomp.component';

describe('DogcompComponent', () => {
  let component: DogcompComponent;
  let fixture: ComponentFixture<DogcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
