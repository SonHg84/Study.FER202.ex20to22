import UserList from './UserList';
import DishList from './DishList';
export default function ResourceHome() {
  return (
    <div className="demo-grid">
      <UserList />
      <DishList />
    </div>
  );
}
