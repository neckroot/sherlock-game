import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tile-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile-field.component.html',
  styleUrl: './tile-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileFieldComponent {}
