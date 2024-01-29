import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  Input,
} from '@angular/core';
import { Clue } from '../clue.model';
import { TileComponent } from '../../tile/tile.component';
import { GameFieldService } from '../../game-field/services/game-field.service';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrl: './clue.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TileComponent],
})
export class ClueComponent {
  @Input() clue!: Clue;

  @HostBinding('style.flex-direction')
  @Input()
  orientation!: 'row' | 'column';

  private _gameFieldService = inject(GameFieldService);
  public answers = this._gameFieldService.gameGoal;
  public clueMinSideSize = 64;

  @HostBinding('style.width.px') get tileWidth() {
    if (this.orientation === 'row') {
      return this.clueMinSideSize * 3;
    }

    return this.clueMinSideSize;
  }
  @HostBinding('style.height.px') get tileHeight() {
    if (this.orientation === 'column') {
      return this.clueMinSideSize * this.clue.tiles.length;
    }

    return this.clueMinSideSize;
  }
}
