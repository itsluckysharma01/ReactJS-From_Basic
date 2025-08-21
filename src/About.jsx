import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Our Company</h1>
            <p>We're passionate about creating innovative solutions that make a difference in the world.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>To empower businesses with cutting-edge technology solutions that drive growth, innovation, and success in the digital age.</p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🚀</div>
              <h2>Our Vision</h2>
              <p>To be the global leader in transformative technology solutions, creating a more connected and efficient world for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded in 2020, our company began as a small startup with a big dream: to revolutionize how businesses interact with technology. What started as a team of five passionate developers has grown into a global company serving thousands of clients worldwide.</p>
              <p>We believe that technology should be accessible, intuitive, and powerful. Our journey has been marked by continuous innovation, customer-first approach, and a commitment to excellence that drives everything we do.</p>
              <div className="story-stats">
                <div className="stat">
                  <h3>4+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className="stat">
                  <h3>10K+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Team Members</p>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>📈</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We constantly push boundaries and explore new possibilities to deliver groundbreaking solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and building strong partnerships with our clients and colleagues.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every project, ensuring the highest quality standards in all our deliverables.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Growth</h3>
              <p>We're committed to continuous learning and helping our clients and team members reach their full potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>John Anderson</h3>
              <p className="team-role">CEO & Founder</p>
              <p className="team-bio">Visionary leader with 15+ years of experience in technology and business development.</p>
              <div className="social-links">
                <span>💼</span>
                <span>🐦</span>
                <span>📧</span>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍💻</div>
              <h3>Sarah Chen</h3>
              <p className="team-role">CTO</p>
              <p className="team-bio">Tech expert passionate about building scalable solutions and leading innovative development teams.</p>
              <div className="social-links">
                <span>💼</span>
                <span>🐦</span>
                <span>📧</span>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍🎨</div>
              <h3>Mike Rodriguez</h3>
              <p className="team-role">Head of Design</p>
              <p className="team-bio">Creative designer focused on user experience and creating beautiful, functional interfaces.</p>
              <div className="social-links">
                <span>💼</span>
                <span>🐦</span>
                <span>📧</span>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍💼</div>
              <h3>Emily Davis</h3>
              <p className="team-role">Head of Marketing</p>
              <p className="team-bio">Strategic marketer with expertise in digital campaigns and brand development.</p>
              <div className="social-links">
                <span>💼</span>
                <span>🐦</span>
                <span>📧</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Company Founded</h3>
                <p>Started with a small team of 5 passionate developers in a garage.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>First Major Client</h3>
                <p>Landed our first enterprise client and delivered our breakthrough solution.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Expanded operations internationally and reached 1000+ clients worldwide.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Award Recognition</h3>
                <p>Received industry awards for innovation and customer satisfaction.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>New Headquarters</h3>
                <p>Moved to our new state-of-the-art headquarters with room for growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Join Our Journey?</h2>
            <p>We're always looking for talented individuals who share our passion for innovation.</p>
            <div className="cta-buttons">
              <button className="btn-primary">View Careers</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;