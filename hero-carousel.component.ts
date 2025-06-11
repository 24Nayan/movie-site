import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-carousel">
      <div class="carousel-container">
        <!-- Navigation Arrows -->
        <button class="carousel-nav prev" (click)="prevSlide()">‹</button>
        <button class="carousel-nav next" (click)="nextSlide()">›</button>

        <!-- Slides -->
        <div class="carousel-slides" [style.transform]="'translateX(' + (-currentSlide * 100) + '%)'">
          <div class="slide" *ngFor="let movie of movies; let i = index">
            <div class="slide-content">
              <img [src]="movie.poster" [alt]="movie.title" class="slide-image">
              <div class="slide-overlay">
                <div class="slide-info">
                  <h2 class="slide-title">{{ movie.title }}</h2>
                  <p class="slide-genre">{{ movie.genre }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Decorative Stars -->
        <div class="star star-1">✦</div>
        <div class="star star-2">✦</div>
        <div class="star star-3">✦</div>
        <div class="star star-4">✦</div>
      </div>

      <!-- Featured Movie Info -->
      <div class="featured-info">
        <div class="container">
          <div class="featured-content">
            <h3 class="featured-title">{{ movies[currentSlide]?.title }}</h3>
            <p class="featured-genre">{{ movies[currentSlide]?.genre }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-carousel {
      position: relative;
      height: 500px;
      margin-bottom: 60px;
      overflow: hidden;
    }

    .carousel-container {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carousel-slides {
      display: flex;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      width: 300%;
    }

    .slide {
      flex: 0 0 33.333%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
    }

    .slide-content {
      position: relative;
      width: 100%;
      max-width: 400px;
      height: 300px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      transition: all 0.4s ease;
    }

    .slide-content:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    }

    .slide-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .slide-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      padding: 30px 20px 20px;
    }

    .slide-title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
      color: white;
    }

    .slide-genre {
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
    }

    .carousel-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: white;
      font-size: 24px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 10;
      backdrop-filter: blur(10px);
    }

    .carousel-nav:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-50%) scale(1.1);
    }

    .prev {
      left: 40px;
    }

    .next {
      right: 40px;
    }

    .star {
      position: absolute;
      color: rgba(255, 255, 255, 0.3);
      font-size: 20px;
      animation: float 3s ease-in-out infinite;
    }

    .star-1 {
      top: 20%;
      left: 15%;
      animation-delay: 0s;
    }

    .star-2 {
      top: 30%;
      right: 20%;
      animation-delay: 1s;
    }

    .star-3 {
      bottom: 25%;
      left: 10%;
      animation-delay: 2s;
    }

    .star-4 {
      bottom: 15%;
      right: 15%;
      animation-delay: 1.5s;
    }

    .featured-info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
      padding: 20px 0;
    }

    .featured-content {
      text-align: center;
    }

    .featured-title {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .featured-genre {
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
    }

    @media (max-width: 768px) {
      .hero-carousel {
        height: 400px;
      }

      .carousel-nav {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }

      .prev {
        left: 20px;
      }

      .next {
        right: 20px;
      }

      .slide-content {
        max-width: 300px;
        height: 250px;
      }
    }
  `]
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  currentSlide = 1; // Start with middle slide
  private intervalId: any;

  movies = [
    {
      title: 'Raid',
      genre: 'Action',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2p_uJLNZl7T3IEsas3lDskG0yWB-ZfOMgDA&s'
    },
    {
      title: 'Raid2',
      genre: 'Action',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnPcSSouDCSvolCCJfsUzxMrQQbZLHP4jTA&s'
    },
    {
      title: 'SSMB29',
      genre: 'Adventure',
      poster: 'https://i.redd.it/poster-designs-for-ssmb29-v0-9z7021uwo5bb1.jpg?width=3277&format=pjpg&auto=webp&s=fa8e82a3a62a5e8f2e916085d35d19b619c16680'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.movies.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.movies.length - 1 : this.currentSlide - 1;
  }

  private startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }
}