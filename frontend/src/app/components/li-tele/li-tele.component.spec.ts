import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiTeleComponent } from './li-tele.component';

describe('LiTeleComponent', () => {
  let component: LiTeleComponent;
  let fixture: ComponentFixture<LiTeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiTeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiTeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
