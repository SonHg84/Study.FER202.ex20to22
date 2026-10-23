import { useParams } from 'react-router-dom';
export default function UserProfile() {
  const { userId } = useParams();
  return <h3 className="h4">User Profile: {userId ?? 'Chưa chọn user ID'}</h3>;
}
