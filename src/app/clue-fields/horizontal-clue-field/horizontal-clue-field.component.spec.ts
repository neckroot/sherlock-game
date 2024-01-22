import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorizontalClueFieldComponent } from './horizontal-clue-field.component';

describe('HorizontalClueFieldComponent', () => {
  let component: HorizontalClueFieldComponent;
  let fixture: ComponentFixture<HorizontalClueFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalClueFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalClueFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
