import AppBar from '@/components/common/mui/app-bar';
import { PageView } from '@/components/common/swiper/page-view';
import HomeIndexComponent from '@/components/home';
import LiveComponent from '@/components/home/live';
export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <AppBar />
      <PageView
        slides={[
          { key: 'index', node: <HomeIndexComponent /> },
          { key: 'live', node: <LiveComponent /> },
        ]}
      />
    </div>
  );
}
