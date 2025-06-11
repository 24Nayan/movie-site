import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Logo and Description -->
          <div class="footer-section">
            <div class="footer-logo">
              <div class="logo-icon">🎬</div>
            </div>
            <p class="footer-description">
              Discover exclusive content and emerging talent on Gullywood's growing platform. 
              Subscribe to unlock premium films, series, and connect with filmmakers worldwide.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">📘</a>
              <a href="#" class="social-link">🐦</a>
              <a href="#" class="social-link">📷</a>
            </div>
          </div>

          <!-- Main Links -->
          <div class="footer-section">
            <h3 class="footer-title">MAIN</h3>
            <ul class="footer-links">
              <li><a href="#">OTT</a></li>
              <li><a href="#">Movie Jobs</a></li>
            </ul>
          </div>

          <!-- Guides -->
          <div class="footer-section">
            <h3 class="footer-title">GUIDES</h3>
            <ul class="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-section">
            <h3 class="footer-title">SERVICES</h3>
            <ul class="footer-links">
              <li><a href="#">Talent Discovery</a></li>
              <li><a href="#">Film Festival</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-section">
            <h3 class="footer-title">CONTACT</h3>
            <ul class="footer-links">
              <li><a href="mailto:contact&#64;gullywood.com">contact&#64;gullywood.com</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Gullywood. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: rgba(0, 0, 0, 0.8);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 60px 0 20px;
      margin-top: 100px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-section:first-child {
      max-width: 300px;
    }

    .footer-logo {
      margin-bottom: 20px;
    }

    .logo-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }

    .footer-description {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
      margin-bottom: 24px;
      font-size: 14px;
    }

    .social-links {
      display: flex;
      gap: 12px;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .footer-title {
      color: white;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .footer-links {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 12px;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: white;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 20px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .footer-section:first-child {
        max-width: none;
      }
    }
  `]
})
export class FooterComponent {}