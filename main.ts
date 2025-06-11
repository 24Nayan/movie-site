import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { HomePageComponent } from './components/home-page.component';
import { ProfilesPageComponent } from './components/profiles-page.component';
import { ShortFilmFestivalPageComponent } from './components/short-film-festival-page.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HomePageComponent,
    ProfilesPageComponent,
    ShortFilmFestivalPageComponent,
    FooterComponent
  ],
  template: `
    <div class="app">
      <app-header (routeChange)="onRouteChange($event)"></app-header>
      
      <main class="main-content">
        <ng-container [ngSwitch]="currentRoute">
          <app-home *ngSwitchCase="'home'"></app-home>
          <app-profiles-page *ngSwitchCase="'profiles'"></app-profiles-page>
          <app-short-film-festival-page *ngSwitchCase="'short-film-festival'"></app-short-film-festival-page>
          <div *ngSwitchDefault class="coming-soon">
            <div class="container">
              <h2>{{ getPageTitle() }}</h2>
              <p>Coming Soon...</p>
            </div>
          </div>
        </ng-container>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
    }

    .main-content {
      min-height: calc(100vh - 200px);
    }

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
export class App {
  currentRoute = 'home';

  routes = [
    { path: 'home', title: 'Home' },
    { path: 'profiles', title: 'Profiles' },
    { path: 'ott', title: 'OTT' },
    { path: 'posts', title: 'Posts' },
    { path: 'movie-making-learning', title: 'Movie Making Learning' },
    { path: 'short-film-festival', title: 'Short Film Festival' }
  ];

  onRouteChange(route: string): void {
    this.currentRoute = route;
  }

  getPageTitle(): string {
    const route = this.routes.find(r => r.path === this.currentRoute);
    return route ? route.title : 'Page Not Found';
  }
}

bootstrapApplication(App);