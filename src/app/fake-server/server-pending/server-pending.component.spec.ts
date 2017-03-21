import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerPendingComponent } from './server-pending.component';

describe('ServerPendingComponent', () => {
  let component: ServerPendingComponent;
  let fixture: ComponentFixture<ServerPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
