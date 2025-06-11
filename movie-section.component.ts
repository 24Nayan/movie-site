import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="movie-section fade-in-up">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <span class="section-icon">{{ sectionIcon }}</span>
            <h2 class="section-title">{{ title }}</h2>
          </div>
          <button class="btn btn-secondary">View All</button>
        </div>

        <div class="movies-grid">
          <div class="movie-card" *ngFor="let movie of movies" [class.featured]="movie.featured">
            <div class="movie-poster">
              <img [src]="movie.poster" [alt]="movie.title" class="poster-image">
              <div class="movie-overlay">
                <div class="movie-actions">
                  <button class="btn btn-primary">{{ movie.actionText || 'DETAILS' }}</button>
                </div>
              </div>
              <div class="movie-stats" *ngIf="movie.views || movie.likes">
                <span class="stat" *ngIf="movie.likes">👍 {{ movie.likes }}</span>
                <span class="stat" *ngIf="movie.views">👁 {{ movie.views }}</span>
              </div>
            </div>
            <div class="movie-info">
              <h3 class="movie-title">{{ movie.title }}</h3>
              <p class="movie-genre">{{ movie.genre }}</p>
              <p class="movie-location" *ngIf="movie.location">📍 {{ movie.location }}</p>
              <p class="movie-date" *ngIf="movie.date">📅 {{ movie.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .movie-section {
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

    .movies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }

    .movie-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.4s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .movie-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border-color: rgba(102, 126, 234, 0.3);
    }

    .movie-card.featured {
      grid-column: span 2;
    }

    .movie-poster {
      position: relative;
      aspect-ratio: 16/9;
      overflow: hidden;
    }

    .poster-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .movie-card:hover .poster-image {
      transform: scale(1.05);
    }

    .movie-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .movie-card:hover .movie-overlay {
      opacity: 1;
    }

    .movie-stats {
      position: absolute;
      top: 12px;
      right: 12px;
      display: flex;
      gap: 8px;
    }

    .stat {
      background: rgba(0, 0, 0, 0.7);
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 12px;
      color: white;
      backdrop-filter: blur(10px);
    }

    .movie-info {
      padding: 20px;
    }

    .movie-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;
      color: white;
    }

    .movie-genre {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
      margin-bottom: 4px;
    }

    .movie-location,
    .movie-date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 12px;
      margin-bottom: 4px;
    }

    @media (max-width: 768px) {
      .movies-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }

      .movie-card.featured {
        grid-column: span 1;
      }

      .section-header {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
      }
    }
  `]
})
export class MovieSectionComponent {
  @Input() title: string = '';
  @Input() sectionIcon: string = '🎬';
  @Input() movies: any[] = [];
}