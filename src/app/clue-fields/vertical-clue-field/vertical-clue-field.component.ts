import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ClueService } from '../../clues/services/clue.service';
import { ClueComponent } from '../../clues/clue/clue.component';

@Component({
  selector: 'app-vertical-clue-field',
  templateUrl: './vertical-clue-field.component.html',
  styleUrl: './vertical-clue-field.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ClueComponent],
})
export class VerticalClueFieldComponent {
  private _clueService = inject(ClueService);

  public clues = this._clueService.filteredClues('row');
}
