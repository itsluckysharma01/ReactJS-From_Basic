import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Our <span className="highlight">Amazing</span> Platform
          </h1>
          <p className="hero-description">
            Discover the power of innovation with our cutting-edge solutions. 
            We help businesses grow and succeed in the digital world.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span>🚀</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Performance</h3>
              <p>Lightning-fast loading times and optimized performance for the best user experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Modern, responsive design that looks great on all devices and screen sizes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile First</h3>
              <p>Fully responsive design optimized for mobile devices and tablets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Uptime Guarantee</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"This platform has transformed our business. The results exceeded our expectations!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">👨‍💼</div>
                  <div className="author-info">
                    <h4>John Smith</h4>
                    <span>CEO, Tech Corp</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Amazing support team and incredible features. Highly recommend to everyone!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">👩‍💼</div>
                  <div className="author-info">
                    <h4>Sarah Johnson</h4>
                    <span>Marketing Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of satisfied customers and take your business to the next level.</p>
            <button className="btn-cta">Start Your Journey</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;