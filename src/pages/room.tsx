import useConversation from '@/hooks/controller/useConversation';
import { Link } from 'umi';

export default function RoomPage() {
  useConversation();
  return (
    <div className="text-3xl font-bold text-[#fb923c]">
      <Link to="/user">csr to user</Link>
    </div>
  );
}
