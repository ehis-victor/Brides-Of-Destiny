
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Mission from './pages/Mission.tsx';
import Programs from './pages/Programs.tsx';
import Impact from './pages/Impact.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
  return (
    <HashRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </HashRouter>
  );
};

export default App;
