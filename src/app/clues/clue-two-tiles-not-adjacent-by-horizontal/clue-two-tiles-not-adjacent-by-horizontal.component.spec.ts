import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClueTwoTilesNotAdjacentByHorizontalComponent } from './clue-two-tiles-not-adjacent-by-horizontal.component';

describe('ClueTwoTilesNotAdjacentByHorizontalComponent', () => {
  let component: ClueTwoTilesNotAdjacentByHorizontalComponent;
  let fixture: ComponentFixture<ClueTwoTilesNotAdjacentByHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClueTwoTilesNotAdjacentByHorizontalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClueTwoTilesNotAdjacentByHorizontalComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
