import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectaddressPage } from './selectaddress.page';

describe('SelectaddressPage', () => {
  let component: SelectaddressPage;
  let fixture: ComponentFixture<SelectaddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectaddressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
