import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderfinishedPage } from './orderfinished.page';

describe('OrderfinishedPage', () => {
  let component: OrderfinishedPage;
  let fixture: ComponentFixture<OrderfinishedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderfinishedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderfinishedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
