import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClueTwoTilesAnyAfterByHorizontalComponent } from './clue-two-tiles-any-after-by-horizontal.component';

describe('ClueTwoTilesAnyAfterByHorizontalComponent', () => {
  let component: ClueTwoTilesAnyAfterByHorizontalComponent;
  let fixture: ComponentFixture<ClueTwoTilesAnyAfterByHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClueTwoTilesAnyAfterByHorizontalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClueTwoTilesAnyAfterByHorizontalComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
