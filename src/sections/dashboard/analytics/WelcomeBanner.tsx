'use client';

// material-ui
import { Grid, Typography, Button, Stack, Box, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import MainCard from 'components/MainCard';

// types
import { ThemeDirection, ThemeMode } from 'types/config';

//asset
const WelcomeImage = '/assets/images/analytics/welcome-banner.png';
const WelcomeImageArrow = '/assets/images/analytics/welcome-arrow.png';

// ==============================|| ANALYTICS - WELCOME ||============================== //

const WelcomeBanner = () => {
  const theme = useTheme();

  return (
    <MainCard
      border={false}
      sx={{
        background:
          theme.direction === ThemeDirection.RTL
            ? `linear-gradient(60.38deg, ${theme.palette.primary.lighter} 114%, ${theme.palette.primary.light} 34.42%, ${theme.palette.primary.main} 60.95%, ${theme.palette.primary.dark} 84.83%, ${theme.palette.primary.darker} 104.37%)`
            : `linear-gradient(250.38deg, ${theme.palette.primary.lighter} 2.39%, ${theme.palette.primary.light} 34.42%, ${theme.palette.primary.main} 60.95%, ${theme.palette.primary.dark} 84.83%, ${theme.palette.primary.darker} 104.37%)`
      }}
    >
      <Grid container>
        <Grid item md={6} sm={6} xs={12}>
          <Stack spacing={2} sx={{ padding: 3.4 }}>
            <Typography variant="h2" color={theme.palette.background.paper}>
              Welcome to Mantis
            </Typography>
            <Typography variant="h6" color={theme.palette.background.paper}>
              The purpose of a product update is to add new features, fix bugs or improve the performance of the product.
            </Typography>
            <Box>
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  color: theme.palette.background.paper,
                  borderColor: theme.palette.background.paper,
                  '&:hover': {
                    color: 'background.paper',
                    borderColor: theme.palette.background.paper,
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.darker' : 'primary.main'
                  }
                }}
              >
                View full statistic
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item sm={6} xs={12} sx={{ display: { xs: 'none', sm: 'initial' } }}>
          <Stack sx={{ position: 'relative', pr: { sm: 3, md: 8 } }} justifyContent="center" alignItems="flex-end">
            <CardMedia sx={{ width: 'inherit' }} component="img" src={WelcomeImage} alt="Welcome" />
            <Box sx={{ position: 'absolute', bottom: 0, right: '10%' }}>
              <CardMedia component="img" src={WelcomeImageArrow} alt="Welcome Arrow" />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default WelcomeBanner;
