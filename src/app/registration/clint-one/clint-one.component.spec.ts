import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintOneComponent } from './clint-one.component';

describe('ClintOneComponent', () => {
  let component: ClintOneComponent;
  let fixture: ComponentFixture<ClintOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClintOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
