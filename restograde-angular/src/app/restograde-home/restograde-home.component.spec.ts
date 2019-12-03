import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeHomeComponent } from './restograde-home.component';

describe('RestogradeHomeComponent', () => {
  let component: RestogradeHomeComponent;
  let fixture: ComponentFixture<RestogradeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
