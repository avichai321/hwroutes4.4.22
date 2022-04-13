import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandapicompComponent } from './randapicomp.component';

describe('RandapicompComponent', () => {
  let component: RandapicompComponent;
  let fixture: ComponentFixture<RandapicompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandapicompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandapicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
