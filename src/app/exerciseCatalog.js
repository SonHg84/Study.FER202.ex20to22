import Exercise20 from '../exercises/exercise-20/Exercise20';
import Exercise21 from '../exercises/exercise-21/Exercise21';
import Exercise22 from '../exercises/exercise-22/Exercise22';

// Package chỉ chứa các bài trong nhóm này.
const exercises = [
  {
    id: '20',
    title: 'Decoupling Routes',
    group: 'React Router',
    summary: 'Tách cấu hình route khỏi component và navigation.',
    slides: 'Slot 14 · Routes',
    tasks: [
      'routes.js chứa cấu hình và renderRoutes',
      'Home/Products/About/Contact ở component riêng',
      'users/:userId? với useParams',
      'Fallback cho URL không tồn tại',
    ],
    component: Exercise20,
  },
  {
    id: '21',
    title: 'Resource IDs in Routes',
    group: 'React Router',
    summary: 'Danh sách users/dishes và trang chi tiết theo resource ID.',
    slides: 'Slot 14 · Resource IDs',
    tasks: [
      'Users list và /users/:userId',
      'Dishes list và /dishes/:dishId',
      'Xử lý ID 0 và ID không tồn tại',
    ],
    component: Exercise21,
  },
  {
    id: '22',
    title: 'Optional Parameters và Link',
    group: 'React Router',
    summary: 'Navbar Reactstrap, Link, optional user ID và query string.',
    slides: 'Slot 14 · Optional Parameters và Link',
    tasks: [
      'Navbar Logo/Home/About/Contact/Profile bằng Reactstrap',
      'Route profile/:userId? và useParams',
      'Link điều hướng SPA, query tab qua useSearchParams',
      'Navbar có toggler responsive',
    ],
    component: Exercise22,
  },
];
export default exercises;
