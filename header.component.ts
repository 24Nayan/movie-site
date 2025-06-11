import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <!-- Logo -->
          <div class="logo" (click)="navigateTo('home')">
            <div class="logo-icon">🎬</div>
          </div>

          <!-- Navigation -->
          <nav class="nav">
            <a href="#" class="nav-link" [class.active]="activeRoute === 'home'" (click)="navigateTo('home')">Home</a>
            <a href="#" class="nav-link" [class.active]="activeRoute === 'profiles'" (click)="navigateTo('profiles')">Profiles</a>
            <a href="#" class="nav-link" [class.active]="activeRoute === 'ott'" (click)="navigateTo('ott')">OTT</a>
            <a href="#" class="nav-link" [class.active]="activeRoute === 'posts'" (click)="navigateTo('posts')">Posts</a>
            <a href="#" class="nav-link" [class.active]="activeRoute === 'movie-making-learning'" (click)="navigateTo('movie-making-learning')">Movie Making Learning</a>
            <a href="#" class="nav-link" [class.active]="activeRoute === 'short-film-festival'" (click)="navigateTo('short-film-festival')">Short Film Festival</a>
          </nav>

          <!-- Right Section -->
          <div class="header-right">
            <div class="contact-info">
              <span class="contact-email">📧 contact&#64;gullywood.com</span>
              <span class="hours">🕒 Mon-Fri: 10:00am - 09:00pm</span>
            </div>
            <div class="user-section">
              <div class="user-avatar">👤</div>
              <span class="phone">+91 567 890 68</span>
              <button class="btn btn-primary">Sign In →</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      padding: 12px 0;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 32px;
      flex: 1;
      justify-content: center;
    }

    .nav-link {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      cursor: pointer;
    }

    .nav-link:hover,
    .nav-link.active {
      color: white;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 1px;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
    }

    .user-section {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .user-avatar {
      width: 32px;
      height: 32px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .phone {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
    }

    @media (max-width: 1200px) {
      .contact-info {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .nav {
        display: none;
      }
      
      .header-content {
        gap: 20px;
      }
    }
  `]
})
export class HeaderComponent {
  @Output() routeChange = new EventEmitter<string>();
  activeRoute = 'home';

  navigateTo(route: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.activeRoute = route;
    this.routeChange.emit(route);
  }
}