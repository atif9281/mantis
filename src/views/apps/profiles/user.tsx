'use client';

import { useEffect, useRef } from 'react';

// next
import { usePathname } from 'next/navigation';

// material-ui
import { Grid } from '@mui/material';

// project import
import ProfileCard from 'sections/apps/profiles/user/ProfileCard';
import ProfileTabs from 'sections/apps/profiles/user/ProfileTabs';
import TabPersonal from 'sections/apps/profiles/user/TabPersonal';
import TabPayment from 'sections/apps/profiles/user/TabPayment';
import TabPassword from 'sections/apps/profiles/user/TabPassword';
import TabSettings from 'sections/apps/profiles/user/TabSettings';
import { handlerActiveItem, useGetMenuMaster } from 'api/menu';

// ==============================|| PROFILE - USER ||============================== //

type Props = {
  tab: string;
};

const UserProfile = ({ tab }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const { menuMaster } = useGetMenuMaster();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (menuMaster.openedItem !== 'user-profile') handlerActiveItem('user-profile');
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ProfileCard focusInput={focusInput} />
      </Grid>
      <Grid item xs={12} md={3}>
        <ProfileTabs focusInput={focusInput} />
      </Grid>
      <Grid item xs={12} md={9}>
        {tab === 'personal' && <TabPersonal />}
        {tab === 'payment' && <TabPayment />}
        {tab === 'password' && <TabPassword />}
        {tab === 'settings' && <TabSettings />}
      </Grid>
    </Grid>
  );
};

export default UserProfile;
