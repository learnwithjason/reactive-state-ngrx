import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoopLevelComponent } from './boop-level.component';

describe('BoopLevelComponent', () => {
  let component: BoopLevelComponent;
  let fixture: ComponentFixture<BoopLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoopLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoopLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
