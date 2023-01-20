import theme from '@/utils/mui/theme';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import IconTabs from './top-tabs';

export default function AppBar() {
  return (
    <>
      <Paper
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.snackbar,
          backgroundColor: 'transparent',
        }}
        elevation={0}
      >
        <Toolbar>
          <IconTabs />
        </Toolbar>
      </Paper>
    </>
  );
}
