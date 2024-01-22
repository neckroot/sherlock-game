import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horizontal-clue-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-clue-field.component.html',
  styleUrl: './horizontal-clue-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalClueFieldComponent {}
