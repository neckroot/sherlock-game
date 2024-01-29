import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClueService } from '../../clues/services/clue.service';
import { ClueComponent } from '../../clues/clue/clue.component';

@Component({
  selector: 'app-horizontal-clue-field',
  standalone: true,
  imports: [CommonModule, ClueComponent],
  templateUrl: './horizontal-clue-field.component.html',
  styleUrl: './horizontal-clue-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalClueFieldComponent {
  private _clueService = inject(ClueService);
  public clues = this._clueService.filteredClues('column');
}
