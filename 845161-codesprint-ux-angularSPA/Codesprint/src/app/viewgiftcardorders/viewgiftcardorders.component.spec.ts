import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgiftcardordersComponent } from './viewgiftcardorders.component';

describe('ViewgiftcardordersComponent', () => {
  let component: ViewgiftcardordersComponent;
  let fixture: ComponentFixture<ViewgiftcardordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgiftcardordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgiftcardordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
