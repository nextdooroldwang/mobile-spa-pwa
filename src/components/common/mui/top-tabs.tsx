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
    '&.MuiTab-root': { justifyContent: 'flex-start' },
  }));

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      TabIndicatorProps={{ sx: { backgroundColor: 'transparent' } }}
    >
      <FlexStartTab
        icon={value === 0 ? <AutoAwesomeIcon /> : undefined}
        label="bottom"
        iconPosition="bottom"
      />
      <FlexStartTab
        icon={value === 1 ? <AutoAwesomeIcon /> : undefined}
        iconPosition="bottom"
        label="start"
      />
      <FlexStartTab
        icon={value === 2 ? <AutoAwesomeIcon /> : undefined}
        iconPosition="bottom"
        label="end"
      />
    </Tabs>
  );
}
