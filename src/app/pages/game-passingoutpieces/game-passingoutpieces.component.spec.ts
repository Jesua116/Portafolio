import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePassingOutPiecesComponent } from './game-passingoutpieces.component';

describe('GamePassingoutpiecesComponent', () => {
  let component: GamePassingOutPiecesComponent;
  let fixture: ComponentFixture<GamePassingOutPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePassingOutPiecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePassingOutPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
