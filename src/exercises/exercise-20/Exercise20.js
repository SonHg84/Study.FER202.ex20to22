import { Link, Route, Routes } from 'react-router-dom';
import ExampleCard from '../../shared/components/ExampleCard';
import NavigationMenu from './components/NavigationMenu';
import { renderRoutes } from './routes';
// Trang bài 20: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise20() {
  // BrowserRouter đã nằm ở index.js; không lồng thêm Router trong module.
  return (
    <ExampleCard
      title="Decoupling Route Declarations"
      description="routes.js chứa cấu hình. Các trang nằm ở file riêng. Thử reload hoặc dùng nút Back sau khi đổi trang."
    >
      <NavigationMenu />
      <div className="result-box">
        <Routes>
          {renderRoutes()}
          <Route
            path="*"
            element={
              <p>
                Trang không tồn tại. <Link to="/exercises/20">Về Home</Link>
              </p>
            }
          />
        </Routes>
      </div>
    </ExampleCard>
  );
}
