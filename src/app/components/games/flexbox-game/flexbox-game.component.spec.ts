import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxGameComponent } from './flexbox-game.component';

describe('FlexboxGameComponent', () => {
  let component: FlexboxGameComponent;
  let fixture: ComponentFixture<FlexboxGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
