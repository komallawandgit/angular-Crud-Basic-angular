import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintTwoComponent } from './clint-two.component';

describe('ClintTwoComponent', () => {
  let component: ClintTwoComponent;
  let fixture: ComponentFixture<ClintTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClintTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
