import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorGameComponent } from './selector-game.component';

describe('SelectorGameComponent', () => {
  let component: SelectorGameComponent;
  let fixture: ComponentFixture<SelectorGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
