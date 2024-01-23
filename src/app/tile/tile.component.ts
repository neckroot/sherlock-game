import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  standalone: true,
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileComponent {
  @Input() row!: number;
  @Input() col!: number;

  readonly chunkSize = 64;

  public get bgPositionX() {
    return -(this.row * 6 + this.col) * this.chunkSize;
  }
}
