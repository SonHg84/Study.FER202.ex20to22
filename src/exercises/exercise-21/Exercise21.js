import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ExampleCard from '../../shared/components/ExampleCard';
import ResourceHome from './components/ResourceHome';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import DishList from './components/DishList';
import DishDetails from './components/DishDetails';
// Trang bài 21: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise21() {
  return (
    <ExampleCard
      title="Resource IDs in Routes"
      description="Link tạo URL; route :userId / :dishId nhận ID; useParams đọc ID để tìm dữ liệu."
    >
      <nav className="demo-nav" aria-label="Bài 21 navigation">
        <NavLink end to="/exercises/21">
          Home
        </NavLink>
        <NavLink to="/exercises/21/users">Users</NavLink>
        <NavLink to="/exercises/21/dishes">Dishes</NavLink>
      </nav>
      <Routes>
        <Route index element={<ResourceHome />} />
        <Route path="users" element={<UserList />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="dishes" element={<DishList />} />
        <Route path="dishes/:dishId" element={<DishDetails />} />
        <Route
          path="*"
          element={
            <p>
              Không có trang này. <Link to="/exercises/21">Về Home</Link>
            </p>
          }
        />
      </Routes>
    </ExampleCard>
  );
}
