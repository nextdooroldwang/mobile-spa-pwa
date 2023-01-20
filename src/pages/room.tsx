import useConversation from '@/hooks/controller/useConversation';
import { Link } from 'umi';

export default function RoomPage() {
  useConversation();
  return <Link to="/user">csr to user</Link>;
}
