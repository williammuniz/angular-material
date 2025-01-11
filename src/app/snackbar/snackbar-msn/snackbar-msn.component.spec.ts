import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarMsnComponent } from './snackbar-msn.component';

describe('SnackbarMsnComponent', () => {
  let component: SnackbarMsnComponent;
  let fixture: ComponentFixture<SnackbarMsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarMsnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarMsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
