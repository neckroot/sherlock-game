import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TileFieldComponent } from './tile-field.component';

describe('TileFieldComponent', () => {
  let component: TileFieldComponent;
  let fixture: ComponentFixture<TileFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
