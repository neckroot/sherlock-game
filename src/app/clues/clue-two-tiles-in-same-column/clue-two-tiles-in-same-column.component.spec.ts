import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClueTwoTilesInSameColumnComponent } from './clue-two-tiles-in-same-column.component';

describe('ClueTwoTilesInSameColumnComponent', () => {
  let component: ClueTwoTilesInSameColumnComponent;
  let fixture: ComponentFixture<ClueTwoTilesInSameColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClueTwoTilesInSameColumnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClueTwoTilesInSameColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
