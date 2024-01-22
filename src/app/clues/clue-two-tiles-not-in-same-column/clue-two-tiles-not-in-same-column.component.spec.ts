import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClueTwoTilesNotInSameColumnComponent } from './clue-two-tiles-not-in-same-column.component';

describe('ClueTwoTilesNotInSameColumnComponent', () => {
  let component: ClueTwoTilesNotInSameColumnComponent;
  let fixture: ComponentFixture<ClueTwoTilesNotInSameColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClueTwoTilesNotInSameColumnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClueTwoTilesNotInSameColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
