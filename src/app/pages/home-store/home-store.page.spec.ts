import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStorePage } from './home-store.page';

describe('HomeStorePage', () => {
  let component: HomeStorePage;
  let fixture: ComponentFixture<HomeStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeStorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
