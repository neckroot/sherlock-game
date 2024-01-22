import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClueThreeTilesAdjacentByHorizontalComponent } from './clue-three-tiles-adjacent-by-horizontal.component';

describe('ClueThreeTilesAdjacentByHorizontalComponent', () => {
  let component: ClueThreeTilesAdjacentByHorizontalComponent;
  let fixture: ComponentFixture<ClueThreeTilesAdjacentByHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClueThreeTilesAdjacentByHorizontalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClueThreeTilesAdjacentByHorizontalComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
