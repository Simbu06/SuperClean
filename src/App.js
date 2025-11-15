import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroContent />
      <Features />
      <WhyChooseUs />
      <HeroSection />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
