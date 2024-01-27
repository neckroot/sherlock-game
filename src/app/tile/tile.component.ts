import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Tile } from './tile.model';
import { GameFieldService } from '../game-field/services/game-field.service';
import { TILE_IMAGE_SIZE } from '../utils/game-constants';

@Component({
  selector: 'app-tile',
  standalone: true,
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent {
  @Input() tile!: Tile;
  @Input() tileFieldId!: number;
  private _gameFieldService = inject(GameFieldService);

  public get bgPositionX() {
    return -this.tile * TILE_IMAGE_SIZE;
  }

  public removeTile(event: UIEvent) {
    event.preventDefault();
    this._gameFieldService.removeTile(this.tile, this.tileFieldId);
  }

  public setTileAsAnswer() {
    this._gameFieldService.setTileAsAnswer(this.tile, this.tileFieldId);
  }

  protected readonly TILE_IMAGE_SIZE = TILE_IMAGE_SIZE;
}
