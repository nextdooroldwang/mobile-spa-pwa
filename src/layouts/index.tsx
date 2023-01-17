import useFirebase from '@/hooks/controller/common/useFirebase';
import { IRouteComponentProps } from 'umi';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  useFirebase();

  return children;
}
