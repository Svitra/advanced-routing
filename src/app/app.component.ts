import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterEvent,
  ResolveStart,
  ResolveEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }
  checkRouterEvent(routerEvent: RouterEvent): any {
    if (routerEvent instanceof ResolveStart) {
      this.isLoading = true;
    }
    if (
      routerEvent instanceof ResolveEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.isLoading = false;
    }
  }
}
