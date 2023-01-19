import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { styled } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const FlexStartTab = styled(Tab)(() => ({
    '&.MuiTab-root': {
      justifyContent: 'flex-start',
      paddingTop: 0,
      paddingBottom: 0,
      minHeight: 'unset',
      '& .MuiTab-iconWrapper': { marginTop: 0 },
    },
  }));

  const ActiveIcon = <AutoAwesomeIcon sx={{ fontSize: 12 }} />;

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      sx={{ minHeight: 'unset' }}
      TabIndicatorProps={{ sx: { backgroundColor: 'transparent' } }}
    >
      <FlexStartTab
        icon={value === 0 ? ActiveIcon : undefined}
        label="bottom"
        iconPosition="bottom"
      />
      <FlexStartTab
        icon={value === 1 ? ActiveIcon : undefined}
        iconPosition="bottom"
        label="start"
      />
      <FlexStartTab
        icon={value === 2 ? ActiveIcon : undefined}
        iconPosition="bottom"
        label="end"
      />
    </Tabs>
  );
}
