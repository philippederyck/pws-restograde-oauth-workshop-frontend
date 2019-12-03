import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeLoginComponent } from './restograde-login.component';

describe('RestogradeLoginComponent', () => {
  let component: RestogradeLoginComponent;
  let fixture: ComponentFixture<RestogradeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
