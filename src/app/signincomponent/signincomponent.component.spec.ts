import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignincomponentComponent } from './signincomponent.component';

describe('SignincomponentComponent', () => {
  let component: SignincomponentComponent;
  let fixture: ComponentFixture<SignincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
