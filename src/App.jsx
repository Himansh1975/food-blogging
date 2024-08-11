import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <HeroSection />
      <AboutUs />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
