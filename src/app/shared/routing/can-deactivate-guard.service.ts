import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';
import { DirtyAware } from './dirty-aware';
import { MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';
import { CanDeactivateDialogComponent } from '../../can-deactivate-dialog/can-deactivate-dialog.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<DirtyAware> {
  constructor(public dialog: MatDialog) {}

  canDeactivate(component: DirtyAware): Observable<boolean> | boolean {
    if (!component.isDirty()) {
      return true;
    }

    const dialogRef = this.dialog.open(CanDeactivateDialogComponent);
    return dialogRef.afterClosed().pipe(
      map(result => {
        if (result) {
          return true;
        }
        return false;
      }),
    );
  }
}
