import { Link, useParams, useSearchParams } from 'react-router-dom';
export default function Profile() {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'overview';
  return (
    <div className="text-center">
      <h3 className="h5">Profile Component</h3>
      <p>User: {userId ?? 'Guest (không truyền userId)'}</p>
      <p>Query tab: {tab}</p>
      <Link
        to={`/exercises/22/profile/${encodeURIComponent(userId || 'son')}?tab=activity`}
      >
        Xem tab activity qua query string
      </Link>
    </div>
  );
}
