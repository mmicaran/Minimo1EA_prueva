import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiAsigComponent } from './li-asig.component';

describe('LiAsigComponent', () => {
  let component: LiAsigComponent;
  let fixture: ComponentFixture<LiAsigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiAsigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiAsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
