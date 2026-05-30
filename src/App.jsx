import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './pages/Profile.jsx';
import Messages from './pages/Messages.jsx';
import News from './pages/News.jsx';
import Music from './pages/Music.jsx';
import Settings from './pages/Settings.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
