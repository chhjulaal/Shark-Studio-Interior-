import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './components/pages/HomePage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { AboutPage } from './components/pages/AboutPage';
import { OurWorkPage } from './components/pages/OurWorkPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'our-work':
        return <OurWorkPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen smooth-scroll">
      <ScrollProgress />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}
