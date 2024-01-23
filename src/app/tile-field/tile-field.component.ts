import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TileComponent } from '../tile/tile.component';

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
  readonly cols = Array.from(Array(6).keys());

  public get row() {
    return Math.floor(this.id / 6);
  }
}
