import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Route {
  path: string;
  component: any;
  title: string;
}

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="router-outlet">
      <ng-container [ngSwitch]="currentRoute">
        <app-home *ngSwitchCase="'home'"></app-home>
        <app-profiles-page *ngSwitchCase="'profiles'"></app-profiles-page>
        <div *ngSwitchDefault class="coming-soon">
          <h2>{{ getPageTitle() }}</h2>
          <p>Coming Soon...</p>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`
    .coming-soon {
      text-align: center;
      padding: 100px 20px;
    }

    .coming-soon h2 {
      font-size: 32px;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .coming-soon p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 18px;
    }
  `]
})
export class AppRoutingComponent {
  currentRoute = 'home';

  routes: Route[] = [
    { path: 'home', component: 'home', title: 'Home' },
    { path: 'profiles', component: 'profiles', title: 'Profiles' },
    { path: 'ott', component: 'ott', title: 'OTT' },
    { path: 'posts', component: 'posts', title: 'Posts' },
    { path: 'movie-making-learning', component: 'movie-making-learning', title: 'Movie Making Learning' },
    { path: 'short-film-festival', component: 'short-film-festival', title: 'Short Film Festival' }
  ];

  setRoute(route: string): void {
    this.currentRoute = route;
  }

  getPageTitle(): string {
    const route = this.routes.find(r => r.path === this.currentRoute);
    return route ? route.title : 'Page Not Found';
  }
}