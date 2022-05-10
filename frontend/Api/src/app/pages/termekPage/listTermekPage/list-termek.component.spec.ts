import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTermekComponent } from './list-termek.component';

describe('ListTermekComponent', () => {
  let component: ListTermekComponent;
  let fixture: ComponentFixture<ListTermekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTermekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTermekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
