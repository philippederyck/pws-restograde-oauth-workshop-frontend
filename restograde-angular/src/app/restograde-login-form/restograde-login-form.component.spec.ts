import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeLoginFormComponent } from './restograde-login-form.component';

describe('RestogradeLoginFormComponent', () => {
  let component: RestogradeLoginFormComponent;
  let fixture: ComponentFixture<RestogradeLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
