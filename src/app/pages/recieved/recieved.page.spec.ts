import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedPage } from './recieved.page';

describe('RecievedPage', () => {
  let component: RecievedPage;
  let fixture: ComponentFixture<RecievedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
