import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TileFieldComponent } from '../tile-field/tile-field.component';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrl: './game-field.component.scss',
  imports: [TileFieldComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameFieldComponent {
  private _FIELD_SIZE = 36;

  public get tileFieldsID() {
    return Array.from(Array(this._FIELD_SIZE).keys());
  }
}
