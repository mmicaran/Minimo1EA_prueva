import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiSisComponent } from './li-sis.component';

describe('LiSisComponent', () => {
  let component: LiSisComponent;
  let fixture: ComponentFixture<LiSisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiSisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiSisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
