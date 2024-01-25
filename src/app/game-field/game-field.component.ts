import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TileFieldComponent } from '../tile-field/tile-field.component';
import { GameFieldService } from './services/game-field.service';
import { AsyncPipe } from '@angular/common';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrl: './game-field.component.scss',
  imports: [TileFieldComponent, AsyncPipe],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameFieldComponent implements OnInit {
  private _gameFieldService = inject(GameFieldService);
  private _gameService = inject(GameService);

  public gameField$ = this._gameFieldService.gameField$;

  ngOnInit() {
    this._gameService.gameStatus$.subscribe((value) => console.log(value));
  }
}
