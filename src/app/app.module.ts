import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './shared/routing/routes';
import { BookModule } from './book/book.module';
import { HttpClientModule } from '@angular/common/http';
import { CanDeactivateGuard } from './shared/routing/can-deactivate-guard.service';
import { CanDeactivateDialogComponent } from './can-deactivate-dialog/can-deactivate-dialog.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, CanDeactivateDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(routes, { enableTracing: true }),
    // feature modules
    BookModule,
    MatDialogModule,
  ],
  entryComponents: [CanDeactivateDialogComponent],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
