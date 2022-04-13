import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatscompComponent } from './catscomp.component';

describe('CatscompComponent', () => {
  let component: CatscompComponent;
  let fixture: ComponentFixture<CatscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatscompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
