import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedSites } from './components/FeaturedSites';
import { Categories } from './components/Categories';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { ARView } from './components/ARView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'ar'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showARView = () => setCurrentPage('ar');
  const showHome = () => setCurrentPage('home');
  const handleMobileMenuToggle = (isOpen: boolean) => setIsMobileMenuOpen(isOpen);

  if (currentPage === 'ar') {
    return (
      <div className="min-h-screen" style={{ background: 'var(--background)' }}>
        <Header 
          onARViewClick={showARView} 
          onHomeClick={showHome} 
          onMobileMenuToggle={handleMobileMenuToggle}
        />
        <main className={isMobileMenuOpen ? 'mobile-menu-blur' : ''}>
          <ARView onBack={showHome} />
        </main>
        <Footer className={isMobileMenuOpen ? 'mobile-menu-blur' : ''} />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <Header 
        onARViewClick={showARView} 
        onHomeClick={showHome} 
        onMobileMenuToggle={handleMobileMenuToggle}
      />
      <main className={isMobileMenuOpen ? 'mobile-menu-blur' : ''}>
        <Hero onARViewClick={showARView} />
        <FeaturedSites />
        <Categories />
        {/* <Stats /> */}
      </main>
      <Footer className={isMobileMenuOpen ? 'mobile-menu-blur' : ''} />
    </div>
  );
}