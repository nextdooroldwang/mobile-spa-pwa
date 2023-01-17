import { Link } from 'umi';
// import { isBrowser } from 'umi';

export default function IndexPage() {
  return (
    <div className="text-3xl font-bold text-[#fb923c]">
      <Link to="/user">csr to user</Link>
    </div>
  );
}
