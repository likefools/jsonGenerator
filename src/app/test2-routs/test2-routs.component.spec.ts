import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2RoutsComponent } from './test2-routs.component';

describe('Test2RoutsComponent', () => {
  let component: Test2RoutsComponent;
  let fixture: ComponentFixture<Test2RoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test2RoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2RoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
