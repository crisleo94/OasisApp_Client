import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectproductsPage } from './selectproducts.page';

describe('SelectproductsPage', () => {
  let component: SelectproductsPage;
  let fixture: ComponentFixture<SelectproductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectproductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
