import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-short-film-festival-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="short-film-festival-page">
      <!-- Page Header -->
      <div class="page-header">
        <div class="container">
          <div class="header-content">
            <div class="page-title-section">
              <span class="page-icon">🏆</span>
              <h1 class="page-title">Short Film Festival</h1>
            </div>
            
            <div class="search-section">
              <div class="search-container">
                <input 
                  type="text" 
                  placeholder="Search by name or title..." 
                  class="search-input"
                  [(ngModel)]="searchQuery"
                  (input)="onSearch()">
                <button class="search-btn">🔍</button>
              </div>
            </div>

            <div class="sort-section">
              <button class="btn btn-secondary sort-btn">Sort ↕️</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Festival Grid -->
      <div class="festivals-content">
        <div class="container">
          <div class="festivals-grid">
            <div class="festival-card" *ngFor="let festival of displayedFestivals">
              <div class="festival-poster">
                <img [src]="festival.poster" [alt]="festival.title" class="poster-image">
                <div class="festival-overlay">
                  <div class="festival-actions">
                    <button class="btn btn-primary apply-btn">{{ festival.actionText }}</button>
                  </div>
                </div>
                <div class="festival-badge" *ngIf="festival.featured">
                  <span class="badge-icon">⭐</span>
                </div>
              </div>
              
              <div class="festival-info">
                <h3 class="festival-title">{{ festival.title }}</h3>
                <div class="festival-details">
                  <p class="festival-location">📍 {{ festival.location }}</p>
                  <div class="festival-date">
                    <span class="date-icon">📅</span>
                    <span class="date-text">{{ festival.date }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .short-film-festival-page {
      min-height: 100vh;
      padding-top: 20px;
    }

    .page-header {
      margin-bottom: 40px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
    }

    .page-title-section {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .page-icon {
      font-size: 32px;
    }

    .page-title {
      font-size: 32px;
      font-weight: 700;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .search-section {
      flex: 1;
      max-width: 500px;
    }

    .search-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .search-input {
      width: 100%;
      padding: 12px 50px 12px 16px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 25px;
      color: white;
      font-size: 14px;
      outline: none;
      transition: all 0.3s ease;
    }

    .search-input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .search-input:focus {
      border-color: rgba(102, 126, 234, 0.5);
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .search-btn {
      position: absolute;
      right: 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .search-btn:hover {
      transform: scale(1.05);
    }

    .sort-section {
      display: flex;
      align-items: center;
    }

    .sort-btn {
      padding: 12px 20px;
      font-size: 14px;
    }

    .festivals-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }

    .festival-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.4s ease;
      position: relative;
    }

    .festival-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border-color: rgba(102, 126, 234, 0.3);
    }

    .festival-poster {
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

    .festival-card:hover .poster-image {
      transform: scale(1.05);
    }

    .festival-overlay {
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

    .festival-card:hover .festival-overlay {
      opacity: 1;
    }

    .apply-btn {
      padding: 10px 24px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .festival-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .badge-icon {
      font-size: 16px;
    }

    .festival-info {
      padding: 24px;
    }

    .festival-title {
      font-size: 20px;
      font-weight: 600;
      color: white;
      margin-bottom: 16px;
    }

    .festival-details {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .festival-location {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }

    .festival-date {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }

    .date-icon {
      font-size: 12px;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 20px;
        align-items: stretch;
      }

      .festivals-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .page-title-section {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .festivals-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ShortFilmFestivalPageComponent {
  searchQuery = '';

  allFestivals = [
    {
      title: 'Raid',
      location: 'Mumbai',
      date: '2025-06-19',
      poster: 'https://gullywood.dreambiginnovations.com:8002/media/filmfestival/2589bd1e-e931-49ec-a7e2-48b8968ecdf8.webp',
      actionText: 'APPLY',
      featured: true
    },
    {
      title: 'Baasha',
      location: 'Mumbai',
      date: '2025-04-20',
      poster: 'https://gullywood.dreambiginnovations.com:8002/media/filmfestival/2b09bad0-41c0-40a6-99d1-00844e6a2e43.jpeg',
      actionText: 'APPLY'
    },
    {
      title: 'Halo International',
      location: 'Bangalore',
      date: '2024-10-05',
      poster: 'https://gullywood.dreambiginnovations.com:8002/media/filmfestival/5a530cb4-f086-45be-b6ce-8983cc618357.jpeg',
      actionText: 'APPLY'
    },
    {
      title: 'Watch Dogs 2',
      location: 'Bangalore',
      date: '2024-09-03',
      poster: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      actionText: 'APPLY'
    },
    {
      title: 'Mumbai Stories',
      location: 'Mumbai',
      date: '2025-07-15',
      poster: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      actionText: 'APPLY'
    },
    {
      title: 'Delhi Chronicles',
      location: 'New Delhi',
      date: '2025-08-22',
      poster: 'https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      actionText: 'APPLY',
      featured: true
    }
  ];

  filteredFestivals = [...this.allFestivals];
  displayedFestivals = [...this.allFestivals];

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.filteredFestivals = this.allFestivals.filter(festival =>
        festival.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        festival.location.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredFestivals = [...this.allFestivals];
    }
    this.displayedFestivals = [...this.filteredFestivals];
  }
}