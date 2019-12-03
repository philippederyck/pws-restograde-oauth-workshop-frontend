import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestogradeLogoutComponent } from './restograde-logout.component';

describe('RestogradeLogoutComponent', () => {
  let component: RestogradeLogoutComponent;
  let fixture: ComponentFixture<RestogradeLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestogradeLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestogradeLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
