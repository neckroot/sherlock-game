import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerticalClueFieldComponent } from './vertical-clue-field.component';

describe('VerticalClueFieldComponent', () => {
  let component: VerticalClueFieldComponent;
  let fixture: ComponentFixture<VerticalClueFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalClueFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalClueFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
