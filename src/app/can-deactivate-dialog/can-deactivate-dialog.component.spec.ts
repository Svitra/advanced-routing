import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDeactivateDialogComponent } from './can-deactivate-dialog.component';

describe('CanDeactivateDialogComponent', () => {
  let component: CanDeactivateDialogComponent;
  let fixture: ComponentFixture<CanDeactivateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanDeactivateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanDeactivateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
