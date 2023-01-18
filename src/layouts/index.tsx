import FixedBottomNavigation from '@/components/common/mui/navigation';
import useFirebase from '@/hooks/controller/common/useFirebase';
import theme from '@/utils/mui/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { IRouteComponentProps } from 'umi';

export default function Layout({
  children,
}: // location, route,history,match,
IRouteComponentProps) {
  useFirebase();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">{children}</Container>
      <FixedBottomNavigation />
    </ThemeProvider>
  );
}
