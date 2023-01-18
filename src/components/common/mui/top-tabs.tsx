import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab
        icon={value === 0 ? <AutoAwesomeIcon /> : undefined}
        label="bottom"
        iconPosition="bottom"
      />
      <Tab
        icon={value === 1 ? <AutoAwesomeIcon /> : undefined}
        iconPosition="bottom"
        label="start"
      />
      <Tab
        icon={value === 2 ? <AutoAwesomeIcon /> : undefined}
        iconPosition="bottom"
        label="end"
      />
    </Tabs>
  );
}
