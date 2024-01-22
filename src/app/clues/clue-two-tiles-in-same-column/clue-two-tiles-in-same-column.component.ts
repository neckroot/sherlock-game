import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clue-two-tiles-in-same-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clue-two-tiles-in-same-column.component.html',
  styleUrl: './clue-two-tiles-in-same-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClueTwoTilesInSameColumnComponent {}
