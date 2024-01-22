import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameFieldComponent } from './game-field/game-field.component';
import { HorizontalClueFieldComponent } from './clue-fields/horizontal-clue-field/horizontal-clue-field.component';
import { VerticalClueFieldComponent } from './clue-fields/vertical-clue-field/vertical-clue-field.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    GameFieldComponent,
    HorizontalClueFieldComponent,
    VerticalClueFieldComponent,
  ],
  selector: 'sherlock-game-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
