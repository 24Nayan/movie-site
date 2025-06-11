import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from './hero-carousel.component';
import { MovieSectionComponent } from './movie-section.component';
import { ProfileSectionComponent } from './profile-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroCarouselComponent,
    MovieSectionComponent,
    ProfileSectionComponent
  ],
  template: `
    <div class="home-page">
      <app-hero-carousel></app-hero-carousel>
      
      <app-movie-section
        title="Most Viewed"
        sectionIcon="👁"
        [movies]="mostViewedMovies">
      </app-movie-section>

      <app-profile-section
        title="Talented Profiles"
        [profiles]="talentedProfiles">
      </app-profile-section>

      <app-movie-section
        title="Movie Making Ideas"
        sectionIcon="💡"
        [movies]="movieIdeas">
      </app-movie-section>

      <app-movie-section
        title="Short Film Festival"
        sectionIcon="🏆"
        [movies]="shortFilms">
      </app-movie-section>

      <app-movie-section
        title="New Requirement5ts"
        sectionIcon="📋"
        [movies]="newRequirements">
      </app-movie-section>
    </div>
  `,
  styles: [`
    .home-page {
      padding-top: 40px;
    }
  `]
})
export class HomePageComponent {
  mostViewedMovies = [
    {
      title: 'Raid',
      genre: 'Action',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2p_uJLNZl7T3IEsas3lDskG0yWB-ZfOMgDA&s',
      likes: 0,
      views: 2
    },
    {
      title: 'Raid2',
      genre: 'Action',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTWtlDqgQhCCHb7OQQVbq1rdPwfkcxLzTiQ&s',
      likes: 0,
      views: 3
    },
    {
      title: 'SSMB29',
      genre: 'Adventure',
      poster: 'https://i.redd.it/poster-designs-for-ssmb29-v0-9z7021uwo5bb1.jpg?width=3277&format=pjpg&auto=webp&s=fa8e82a3a62a5e8f2e916085d35d19b619c16680',
      likes: 0,
      views: 1
    },
    {
      title: 'CLEOPATRA',
      genre: 'Adventure',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnPcSSouDCSvolCCJfsUzxMrQQbZLHP4jTA&s',
      likes: 0,
      views: 1
    }
  ];

  talentedProfiles = [
    {
      name: 'Sujata Boudh',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 0,
      views: 3,
      badge: '🏆'
    },
    {
      name: 'Servan Kumar',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 0,
      views: 1,
      badge: '⭐'
    },
    {
      name: 'Anonymous',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      likes: 0,
      views: 2
    }
  ];

  movieIdeas = [
    {
      title: 'Raid2',
      genre: 'Action',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTWtlDqgQhCCHb7OQQVbq1rdPwfkcxLzTiQ&s',
      views: 5
    },
    {
      title: 'Badlapur',
      genre: 'Action',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ843iMEY-NQ2C5GG3vKx0CMN46fD23DO0gow&s',
      views: 5
    },
    {
      title: 'Bahadur',
      genre: 'Actor',
      poster: 'https://gullywood.dreambiginnovations.com:8002/media/movieIdea/Bahadur_Yuzs0Ck.jpg',
      views: 6
    }
  ];

  shortFilms = [
    {
      title: 'Raid',
      genre: 'Mumbai',
      location: 'Mumbai',
      date: '2025-06-19',
      poster: 'https://gullywood.dreambiginnovations.com:8002/media/filmfestival/2589bd1e-e931-49ec-a7e2-48b8968ecdf8.webp',
      actionText: 'APPLY'
    },
    {
      title: 'Baasha',
      genre: 'Mumbai',
      location: 'Mumbai',
      date: '2025-04-20',
      poster: 'https://gullywood.dreambiginnovations.com:8002/media/filmfestival/2b09bad0-41c0-40a6-99d1-00844e6a2e43.jpeg',
      actionText: 'APPLY'
    },
    {
      title: 'Halo International',
      genre: 'Bangalore',
      location: 'Bangalore',
      date: '2024-10-05',
      poster: 'https://gullywood.dreambiginnovations.com:8002/media/filmfestival/5a530cb4-f086-45be-b6ce-8983cc618357.jpeg',
      actionText: 'APPLY'
    }
  ];

  newRequirements = [
    {
      title: 'New Project Alpha',
      genre: 'Drama',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Alfbu-Y_9GjBhVGBrQ1rjQcxig0yFn05XA&s',
      actionText: 'APPLY'
    },
    {
      title: 'Casting Call Beta',
      genre: 'Comedy',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMchbD648ttIgOS-3X2hxqG-pHtxvlP4M8g&s',
      actionText: 'APPLY'
    }
  ];
}