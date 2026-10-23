import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import UserProfile from './components/UserProfile';
// Cấu hình route tách khỏi trang chính. element phải nhận JSX, không truyền function.
export const routes = [
  { index: true, component: HomePage },
  { path: 'products', component: ProductsPage },
  { path: 'about', component: AboutPage },
  { path: 'contact', component: ContactPage },
  { path: 'users/:userId?', component: UserProfile },
];
export function renderRoutes() {
  return routes.map(({ component: Component, ...route }) => (
    <Route key={route.path || 'index'} {...route} element={<Component />} />
  ));
}
