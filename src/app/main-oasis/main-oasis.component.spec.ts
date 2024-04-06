import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOasisComponent } from './main-oasis.component';

describe('MainOasisComponent', () => {
  let component: MainOasisComponent;
  let fixture: ComponentFixture<MainOasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainOasisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainOasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
