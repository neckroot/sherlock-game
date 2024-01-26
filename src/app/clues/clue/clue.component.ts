import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Clue } from '../clue.model';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrl: './clue.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClueComponent {
  @Input() clue!: Clue;
}
