import styles from './index.less';

import { Button, Calendar, TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { history, Link } from 'umi';

const tabs = [
  {
    key: 'index',
    title: 'ホーム',
    icon: <AppOutline />,
  },
  {
    key: 'chat',
    title: 'チャット占い',
    icon: <UnorderedListOutline />,
    badge: '5',
  },
  {
    key: 'consult',
    title: '相談ルーム',
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: '99+',
  },
  {
    key: 'my',
    title: 'マイベージ',
    icon: <UserOutline />,
  },
];

export default function ChatPage() {
  return (
    <div>
      <h1 className={styles.title}>
        client component <Calendar />
        client component client component
        <div>
          <Link to="/room?id=a_222">
            <Button color="primary">to Chat</Button>
          </Link>
        </div>
        <TabBar
          className="fixed left-0 right-0 bottom-0 border-t bg-white"
          activeKey={history.location.pathname}
        >
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
      </h1>
    </div>
  );
}
