import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePointsPage } from './store-points.page';

describe('StorePointsPage', () => {
  let component: StorePointsPage;
  let fixture: ComponentFixture<StorePointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorePointsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
