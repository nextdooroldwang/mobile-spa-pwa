import AccountMenu from '@/components/common/mui/account-menu';
import {
  BootstrapInput,
  NumberFormatCustomInput,
  RedditTextField,
  TextMaskCustomInput,
} from '@/components/common/mui/input';
import CircularIntegration from '@/components/common/mui/progress';
import HorizontalLabelPositionBelowStepper from '@/components/common/mui/step';
import { Android12Switch } from '@/components/common/mui/switch';

import { SaveAltOutlined } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/system/Unstable_Grid';
import { useState } from 'react';

import { Link } from 'umi';
import { HorizontalSwiper } from '../common/swiper/horizontal-swiper';

export default function HomeIndexComponent() {
  const [value, setValue] = useState('1');
  return (
    <div>
      <div style={{ aspectRatio: '16 / 9' }}>
        <HorizontalSwiper />
      </div>
      <div className="text-3xl font-bold text-[#fb923c]">
        <Link to="/user">csr to user</Link>
      </div>
      <LoadingButton
        aria-label="to user"
        variant="outlined"
        loading={false}
        loadingPosition="start"
        startIcon={<SaveAltOutlined />}
      >
        <Link to="/user">csr to user</Link>
      </LoadingButton>
      <Link to="/live">csr to live</Link>
      <AccountMenu />
      <BootstrapInput
        defaultValue="react-bootstrap"
        id="bootstrap-input"
        placeholder="Please enter your name"
      />

      <RedditTextField
        label="Reddit"
        defaultValue="react-reddit"
        helperText="Please enter your name"
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
      />

      <NumberFormatCustomInput
        value="1"
        onChange={(v) => {
          console.log(v);
        }}
      />
      <TextField
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        name="textmask"
        id="formatted-text-mask-input"
        InputProps={{
          inputComponent: TextMaskCustomInput as any,
        }}
        label="Tel"
        variant="filled"
      />

      <Android12Switch />

      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className="w-44"
      />
      <CircularIntegration />
      <Grid container spacing={3} disableEqualOverflow>
        <Grid xs={12}>
          <Typography noWrap>
            `disableEqualOverflow` prevents scrollbar`disableEqualOverflow`
            prevents scrollbar`disableEqualOverflow` prevents scrollbar
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography noWrap>
            `disableEqualOverflow` prevents scrollbar
          </Typography>
        </Grid>
      </Grid>
      <HorizontalLabelPositionBelowStepper />
    </div>
  );
}
