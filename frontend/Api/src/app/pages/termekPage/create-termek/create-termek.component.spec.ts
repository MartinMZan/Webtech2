import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTermekComponent } from './create-termek.component';

describe('CreateTermekComponent', () => {
  let component: CreateTermekComponent;
  let fixture: ComponentFixture<CreateTermekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTermekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTermekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
