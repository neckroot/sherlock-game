import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { TileField } from './tile-field.model';

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
}
