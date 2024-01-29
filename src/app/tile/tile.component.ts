import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { Tile } from './tile.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent {
  @Input() tile!: Tile;

  @HostBinding('style.width.px')
  @HostBinding('style.height.px')
  @Input()
  tileSize!: number;

  @HostBinding('style.background-position-x.px')
  get bgPositionX() {
    return -this.tile * this.tileSize;
  }
}
