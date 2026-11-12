import React, { useState } from 'react';
import { Nav } from './components/layout/Nav';
import { ActionBar } from './components/layout/ActionBar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/story/Hero';
import { About } from './components/sections/About';
import { Draw } from './components/sections/Draw';
import { How } from './components/sections/How';
import { Change } from './components/sections/Change';
import { Demo } from './components/sections/Demo';
import { Work } from './components/sections/Work';
import { Process } from './components/sections/Process';
import { Owner } from './components/sections/Owner';
import { Faq } from './components/sections/Faq';
import { FlipSection } from './components/sections/Flip';
import { Start } from './components/sections/Start';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';

export default function App() {
  const [page, setPage] = useState<'home' | 'terms' | 'privacy'>('home');

  return (
    <div className="min-h-screen bg-[#F7F2ED] text-[#1A0C06]">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Nav onNavigatePage={setPage} />

      <main id="main-content">
        {page === 'terms' && <Terms onBack={() => setPage('home')} />}
        {page === 'privacy' && <Privacy onBack={() => setPage('home')} />}
        {page === 'home' && (
          <>
            <Hero />
            <About />
            <Draw />
            <How />
            <Change />
            <Demo />
            <Work />
            <Process />
            <Owner enabled={false} />
            <Faq />
            <FlipSection />
            <Start />
          </>
        )}
      </main>

      <Footer onNavigatePage={setPage} />
      {page === 'home' && <ActionBar />}
    </div>
  );
}


