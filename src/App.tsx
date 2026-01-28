import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import MemberDetailPage from './pages/MemberDetailPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import WrappedPage from './pages/WrappedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="members/:slug" element={<MemberDetailPage />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="wrapped" element={<WrappedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
