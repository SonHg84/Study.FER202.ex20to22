import { Link, Route, Routes } from 'react-router-dom';
import ExampleCard from '../../shared/components/ExampleCard';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
// Trang bài 22: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise22() {
  return (
    <ExampleCard
      title="Optional Parameters và Link"
      description="profile/:userId? nhận cả /profile và /profile/son. Link chuyển trang trong SPA, tham số tab nằm trong query string."
    >
      <CustomNavbar />
      <div className="p-4 border">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile/:userId?" element={<Profile />} />
          <Route path="*" element={<p>Không có trang này.</p>} />
        </Routes>
      </div>
      <div className="demo-nav mt-3">
        <Link to="/exercises/22/profile">Profile không ID</Link>
        <Link to="/exercises/22/profile/son">Profile có ID: son</Link>
        <Link to="/exercises/22/profile/mary">Profile có ID: mary</Link>
      </div>
    </ExampleCard>
  );
}
