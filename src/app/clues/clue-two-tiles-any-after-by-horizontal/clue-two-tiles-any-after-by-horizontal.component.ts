import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clue-two-tiles-any-after-by-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clue-two-tiles-any-after-by-horizontal.component.html',
  styleUrl: './clue-two-tiles-any-after-by-horizontal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClueTwoTilesAnyAfterByHorizontalComponent {}
