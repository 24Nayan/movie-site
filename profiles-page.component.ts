import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profiles-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="profiles-page">
      <!-- Page Header -->
      <div class="page-header">
        <div class="container">
          <div class="header-content">
            <div class="page-title-section">
              <span class="page-icon">👥</span>
              <h1 class="page-title">Profiles</h1>
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
          </div>
        </div>
      </div>

      <!-- Controls Section -->
      <div class="controls-section">
        <div class="container">
          <div class="controls-content">
            <div class="results-info">
              <span>Showing {{ currentStart }} to {{ currentEnd }} of {{ totalProfiles }}</span>
            </div>
            
            <div class="pagination-controls">
              <button 
                class="pagination-btn" 
                [disabled]="currentPage === 1"
                (click)="previousPage()">
                ‹
              </button>
              <span class="page-info">Page {{ currentPage }}</span>
              <button 
                class="pagination-btn"
                [disabled]="currentPage === totalPages"
                (click)="nextPage()">
                ›
              </button>
            </div>

            <div class="action-buttons">
              <button class="btn btn-secondary">Sort 📊</button>
              <button class="btn btn-secondary">Filter 🔽</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Profiles Grid -->
      <div class="profiles-content">
        <div class="container">
          <div class="profiles-grid">
            <div class="profile-card" *ngFor="let profile of displayedProfiles">
              <div class="profile-header">
                <div class="profile-avatar">
                  <img [src]="profile.avatar" [alt]="profile.name" class="avatar-image">
                  <div class="profile-badge" *ngIf="profile.badge">{{ profile.badge }}</div>
                </div>
                <div class="profile-actions">
                  <button class="action-btn bookmark" [class.active]="profile.bookmarked">📋</button>
                  <button class="action-btn favorite" [class.active]="profile.favorited">❤️</button>
                </div>
              </div>

              <div class="profile-info">
                <h3 class="profile-name">{{ profile.name }}</h3>
                <p class="profile-location" *ngIf="profile.location">📍 {{ profile.location }}</p>
              </div>

              <div class="profile-stats">
                <div class="stat">
                  <span class="stat-icon">👍</span>
                  <span class="stat-value">{{ profile.likes || 0 }}</span>
                </div>
                <div class="stat">
                  <span class="stat-icon">👁</span>
                  <span class="stat-value">{{ profile.views || 0 }}</span>
                </div>
              </div>

              <button class="btn btn-primary profile-details-btn" (click)="viewProfile(profile)">
                DETAILS →
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Pagination -->
      <div class="bottom-pagination">
        <div class="container">
          <div class="pagination-info">
            <span>Showing {{ currentStart }} to {{ currentEnd }} of {{ totalProfiles }}</span>
          </div>
          <div class="pagination-controls">
            <button 
              class="pagination-btn" 
              [disabled]="currentPage === 1"
              (click)="previousPage()">
              ‹
            </button>
            <span class="page-info">Page {{ currentPage }}</span>
            <button 
              class="pagination-btn"
              [disabled]="currentPage === totalPages"
              (click)="nextPage()">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profiles-page {
      min-height: 100vh;
      padding-top: 20px;
    }

    .page-header {
      margin-bottom: 30px;
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

    .controls-section {
      background: rgba(255, 255, 255, 0.05);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 16px 0;
      margin-bottom: 40px;
    }

    .controls-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .results-info {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }

    .pagination-controls {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .pagination-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 16px;
    }

    .pagination-btn:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.2);
    }

    .pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-info {
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
      min-width: 60px;
      text-align: center;
    }

    .action-buttons {
      display: flex;
      gap: 12px;
    }

    .profiles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 60px;
    }

    .profile-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 24px;
      transition: all 0.4s ease;
      position: relative;
    }

    .profile-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
      border-color: rgba(102, 126, 234, 0.3);
    }

    .profile-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .profile-avatar {
      position: relative;
      width: 60px;
      height: 60px;
    }

    .avatar-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .profile-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 8px;
      font-weight: 600;
    }

    .profile-actions {
      display: flex;
      gap: 8px;
    }

    .action-btn {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      border-radius: 6px;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 12px;
    }

    .action-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .action-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .profile-info {
      margin-bottom: 16px;
    }

    .profile-name {
      font-size: 18px;
      font-weight: 600;
      color: white;
      margin-bottom: 4px;
    }

    .profile-location {
      color: rgba(255, 255, 255, 0.6);
      font-size: 12px;
    }

    .profile-stats {
      display: flex;
      gap: 16px;
      margin-bottom: 20px;
    }

    .stat {
      display: flex;
      align-items: center;
      gap: 4px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }

    .stat-icon {
      font-size: 12px;
    }

    .profile-details-btn {
      width: 100%;
      justify-content: center;
    }

    .bottom-pagination {
      background: rgba(255, 255, 255, 0.05);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 20px 0;
      margin-top: 40px;
    }

    .bottom-pagination .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .pagination-info {
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 20px;
        align-items: stretch;
      }

      .controls-content {
        flex-direction: column;
        gap: 16px;
        align-items: stretch;
      }

      .profiles-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .bottom-pagination .container {
        flex-direction: column;
        gap: 16px;
      }
    }
  `]
})
export class ProfilesPageComponent {
  searchQuery = '';
  currentPage = 1;
  itemsPerPage = 12;
  totalProfiles = 25;

  allProfiles = [
    {
      name: 'Sujata Boudh',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 0,
      views: 3,
      badge: '🏆',
      bookmarked: false,
      favorited: true
    },
    {
      name: 'servan kumar',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 0,
      views: 2,
      badge: '⭐',
      bookmarked: true,
      favorited: false
    },
    {
      name: 'Rohit Verma',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 1,
      views: 5,
      badge: '🎬',
      bookmarked: false,
      favorited: false
    },
    {
      name: 'Amisha Santosh Gupta',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 2,
      views: 4,
      bookmarked: false,
      favorited: true
    },
    {
      name: 'Vikas Verma',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 1,
      views: 6,
      badge: '🎭',
      bookmarked: true,
      favorited: false
    },
    {
      name: 'Anish',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 3,
      views: 8,
      bookmarked: false,
      favorited: false
    },
    {
      name: 'Anish Kumar',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 0,
      views: 7,
      bookmarked: false,
      favorited: false
    },
    {
      name: 'Bob',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 2,
      views: 6,
      location: 'New Delhi',
      bookmarked: false,
      favorited: false
    },
    {
      name: 'Testing',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 0,
      views: 4,
      bookmarked: false,
      favorited: false
    },
    {
      name: 'Demo02',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 0,
      views: 6,
      bookmarked: false,
      favorited: false
    },
    {
      name: 'Anonymous User',
      avatar: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 1,
      views: 3,
      bookmarked: false,
      favorited: false
    },
    {
      name: 'Creative Artist',
      avatar: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 4,
      views: 9,
      badge: '🎨',
      bookmarked: true,
      favorited: true
    }
  ];

  filteredProfiles = [...this.allProfiles];
  displayedProfiles: any[] = [];

  constructor() {
    this.updateDisplayedProfiles();
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProfiles.length / this.itemsPerPage);
  }

  get currentStart(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get currentEnd(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredProfiles.length);
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.filteredProfiles = this.allProfiles.filter(profile =>
        profile.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProfiles = [...this.allProfiles];
    }
    this.currentPage = 1;
    this.updateDisplayedProfiles();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedProfiles();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedProfiles();
    }
  }

  private updateDisplayedProfiles(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProfiles = this.filteredProfiles.slice(startIndex, endIndex);
  }

  viewProfile(profile: any): void {
    console.log('Viewing profile:', profile);
    // Navigate to profile detail page
  }
}