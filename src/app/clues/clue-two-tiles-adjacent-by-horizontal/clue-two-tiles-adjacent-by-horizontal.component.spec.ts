import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClueTwoTilesAdjacentByHorizontalComponent } from './clue-two-tiles-adjacent-by-horizontal.component';

describe('ClueTwoTilesAdjacentByHorizontalComponent', () => {
  let component: ClueTwoTilesAdjacentByHorizontalComponent;
  let fixture: ComponentFixture<ClueTwoTilesAdjacentByHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClueTwoTilesAdjacentByHorizontalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClueTwoTilesAdjacentByHorizontalComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
