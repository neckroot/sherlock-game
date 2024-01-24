import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Tile } from './tile.model';
import { GameFieldService } from '../game-field/services/game-field.service';

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
  readonly chunkSize = 64;
  private _gameFieldService = inject(GameFieldService);

  public get bgPositionX() {
    return -this.tile * this.chunkSize;
  }

  public removeTile(event: UIEvent) {
    event.preventDefault();
    this._gameFieldService.removeTile(this.tile, this.tileFieldId);
  }

  public setTileAsAnswer() {
    this._gameFieldService.setTileAsAnswer(this.tile, this.tileFieldId);
  }
}
