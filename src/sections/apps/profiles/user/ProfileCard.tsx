'use client';

// next
import NextLink from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Button, Grid, Stack, Typography } from '@mui/material';

// project import
import BackLeft from './UserProfileBackLeft';
import BackRight from './UserProfileBackRight';
import MainCard from 'components/MainCard';
import ProfileRadialChart from './ProfileRadialChart';

// types
import { ThemeDirection } from 'types/config';

// ==============================|| USER PROFILE - TOP CARD ||============================== //

interface Props {
  focusInput: () => void;
}

const ProfileCard = ({ focusInput }: Props) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainCard border={false} content={false} sx={{ bgcolor: 'primary.lighter', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-7px',
          left: 0,
          zIndex: 1,
          ...(theme.direction === ThemeDirection.RTL && {
            transform: 'rotate(180deg)',
            top: -7,
            bottom: 'unset'
          })
        }}
      >
        <BackLeft />
      </Box>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ position: 'relative', zIndex: 5 }}>
        <Grid item>
          <Stack direction="row" spacing={matchDownSM ? 1 : 2} alignItems="center">
            <Box sx={{ ml: { xs: 0, sm: 1 } }}>
              <ProfileRadialChart />
            </Box>
            <Stack spacing={0.75}>
              <Typography variant="h5">Edit Your Profile</Typography>
              <Typography variant="body2" color="secondary">
                Complete your profile to unlock all features
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sx={{ mx: matchDownSM ? 2 : 3, my: matchDownSM ? 1 : 0, mb: matchDownSM ? 2 : 0 }} xs={matchDownSM ? 12 : 'auto'}>
          <NextLink href="/apps/profiles/user/personal" passHref legacyBehavior>
            <Button variant="contained" fullWidth={matchDownSM} onClick={focusInput}>
              Edit Your Profile
            </Button>
          </NextLink>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          ...(theme.direction === ThemeDirection.RTL && {
            transform: 'rotate(180deg)',
            top: -10,
            bottom: 'unset'
          })
        }}
      >
        <BackRight />
      </Box>
    </MainCard>
  );
};

export default ProfileCard;
