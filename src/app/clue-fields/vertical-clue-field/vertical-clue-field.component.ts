import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vertical-clue-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-clue-field.component.html',
  styleUrl: './vertical-clue-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalClueFieldComponent {}
