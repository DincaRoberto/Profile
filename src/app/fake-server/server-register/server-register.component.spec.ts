import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerRegisterComponent } from './server-register.component';

describe('ServerRegisterComponent', () => {
  let component: ServerRegisterComponent;
  let fixture: ComponentFixture<ServerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
