import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clue-three-tiles-adjacent-by-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clue-three-tiles-adjacent-by-horizontal.component.html',
  styleUrl: './clue-three-tiles-adjacent-by-horizontal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClueThreeTilesAdjacentByHorizontalComponent {}
