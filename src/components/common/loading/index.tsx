import { SpinLoading } from 'antd-mobile';

import styles from './index.less';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <SpinLoading color="primary" />
    </div>
  );
}
