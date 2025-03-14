import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import AnimeDetail from './pages/AnimeDetail';
import WatchAnime from './pages/WatchAnime';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/anime/:slug" element={<AnimeDetail />} />
          <Route path="/watch/:episodeSlug" element={<WatchAnime />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;