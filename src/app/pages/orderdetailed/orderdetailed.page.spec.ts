import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailedPage } from './orderdetailed.page';

describe('OrderdetailedPage', () => {
  let component: OrderdetailedPage;
  let fixture: ComponentFixture<OrderdetailedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdetailedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
