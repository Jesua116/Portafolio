import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTimesaverComponent } from './game-timesaver.component';

describe('GameTimesaverComponent', () => {
  let component: GameTimesaverComponent;
  let fixture: ComponentFixture<GameTimesaverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTimesaverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTimesaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
