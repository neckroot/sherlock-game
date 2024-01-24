import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TileFieldComponent } from '../tile-field/tile-field.component';
import { GameFieldService } from './services/game-field.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrl: './game-field.component.scss',
  imports: [TileFieldComponent, AsyncPipe],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameFieldComponent {
  private _gameFieldService = inject(GameFieldService);

  public gameField$ = this._gameFieldService.gameField;
}
