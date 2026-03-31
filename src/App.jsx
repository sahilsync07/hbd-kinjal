import { Suspense, useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import HeroNew from './components/HeroNew';
import IntroSection from './components/IntroSection';
import Timeline from './components/Timeline';
import MarqueeBanner from './components/MarqueeBanner';
import TimeCounter from './components/TimeCounter';
import FallingConfetti from './components/FallingConfetti';

import BirthdayLetter from './components/BirthdayLetter';
import FooterNew from './components/FooterNew';
import './index.css';

import './components/SectionTransitions.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const sisterName = "Kinjal"; // Happy Birthday! 🎂

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroNew sisterName={sisterName} />
        {/* IntroSection removed - Merged into HeroNew */}
        <MarqueeBanner />
        <Timeline />

        {/* Sections with smooth gradients */}
        <div className="gradient-section-a">
          <TimeCounter />
        </div>

        <div className="gradient-section-b">
          <FallingConfetti />
        </div>



        <BirthdayLetter sisterName={sisterName} />
        <FooterNew />
      </main>
    </>
  );
}

export default App;
