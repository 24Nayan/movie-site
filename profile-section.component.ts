import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="profile-section fade-in-up">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <span class="section-icon">👥</span>
            <h2 class="section-title">{{ title }}</h2>
          </div>
          <button class="btn btn-secondary">View All</button>
        </div>

        <div class="profiles-grid">
          <div class="profile-card" *ngFor="let profile of profiles">
            <div class="profile-avatar">
              <img [src]="profile.avatar" [alt]="profile.name" class="avatar-image">
              <div class="profile-badge" *ngIf="profile.badge">{{ profile.badge }}</div>
            </div>
            <div class="profile-info">
              <h3 class="profile-name">{{ profile.name }}</h3>
              <div class="profile-stats">
                <span class="stat">👍 {{ profile.likes || 0 }}</span>
                <span class="stat">👁 {{ profile.views || 0 }}</span>
              </div>
              <button class="btn btn-primary profile-btn">DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .profile-section {
      margin-bottom: 80px;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    .section-title-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .section-icon {
      font-size: 24px;
    }

    .section-title {
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .profiles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .profile-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 24px;
      text-align: center;
      transition: all 0.4s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .profile-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border-color: rgba(102, 126, 234, 0.3);
    }

    .profile-avatar {
      position: relative;
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
    }

    .avatar-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid rgba(255, 255, 255, 0.2);
    }

    .profile-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 12px;
      font-weight: 600;
    }

    .profile-name {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 12px;
      color: white;
    }

    .profile-stats {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-bottom: 20px;
    }

    .stat {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }

    .profile-btn {
      width: 100%;
    }

    @media (max-width: 768px) {
      .profiles-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .section-header {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
      }
    }
  `]
})
export class ProfileSectionComponent {
  @Input() title: string = '';
  @Input() profiles: any[] = [];
}