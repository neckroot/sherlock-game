import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { TileField } from './tile-field.model';
import { GameFieldService } from '../game-field/services/game-field.service';
import { Tile } from '../tile/tile.model';

@Component({
  selector: 'app-tile-field',
  templateUrl: './tile-field.component.html',
  styleUrl: './tile-field.component.scss',
  imports: [TileComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileFieldComponent {
  @Input() id!: number;
  @Input() tileField!: TileField;

  private _gameFieldService = inject(GameFieldService);

  public removeTile(tile: Tile, tileFieldID: number) {
    this._gameFieldService.removeTile(tile, tileFieldID);
  }

  public setTileAsAnswer(tile: Tile, tileFieldID: number) {
    this._gameFieldService.setTileAsAnswer(tile, tileFieldID);
  }
}
