import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeapiCompComponent } from './freeapi-comp.component';

describe('FreeapiCompComponent', () => {
  let component: FreeapiCompComponent;
  let fixture: ComponentFixture<FreeapiCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeapiCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeapiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
