import AppBar from '@/components/common/mui/app-bar';
import { PageView } from '@/components/common/swiper/page-view';
import ContentWrapperOnNavigation from '@/components/common/wrapper/content-wrapper-on-navigation';
import HomeIndexComponent from '@/components/home';
import LiveComponent from '@/components/home/live';

export default function HomePage() {
  return (
    <>
      <AppBar />
      <PageView
        slides={[
          {
            key: 'index',
            node: (
              <ContentWrapperOnNavigation>
                <HomeIndexComponent />
              </ContentWrapperOnNavigation>
            ),
          },
          {
            key: 'live',
            node: (
              <ContentWrapperOnNavigation>
                <LiveComponent />
              </ContentWrapperOnNavigation>
            ),
          },
        ]}
      />
    </>
  );
}
