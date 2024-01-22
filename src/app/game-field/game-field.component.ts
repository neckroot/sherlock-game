import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-field.component.html',
  styleUrl: './game-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameFieldComponent {}
