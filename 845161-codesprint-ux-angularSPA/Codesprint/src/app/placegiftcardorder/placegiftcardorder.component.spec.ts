import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacegiftcardorderComponent } from './placegiftcardorder.component';

describe('PlacegiftcardorderComponent', () => {
  let component: PlacegiftcardorderComponent;
  let fixture: ComponentFixture<PlacegiftcardorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacegiftcardorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacegiftcardorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
