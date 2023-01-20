import { bottomNavigationHeight } from '@/utils/storages';
import type { ReactNode } from 'react';

export default function ContentWrapperOnNavigation(props: {
  children: ReactNode;
}) {
  return (
    <>
      <div
        style={{
          height: `calc(100vh - ${bottomNavigationHeight}px)`,
          overflow: 'auto',
        }}
      >
        {props.children}
      </div>
    </>
  );
}
