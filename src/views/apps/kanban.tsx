'use client';

import { useState, SyntheticEvent, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// material-ui
import { Box, Grid, Tab, Tabs } from '@mui/material';

import Board from 'sections/apps/kanban/Board';
import Backlogs from 'sections/apps/kanban/Backlogs';

// project import
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import { APP_DEFAULT_PATH } from 'config';
import { handlerActiveItem, useGetMenuMaster } from 'api/menu';

function a11yProps(index: string) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ==============================|| APPLICATION - KANBAN ||============================== //
type Props = {
  tab: string;
};

export default function KanbanPage({ tab }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { menuMaster } = useGetMenuMaster();

  const [value, setValue] = useState(tab);
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.replace(`/apps/kanban/${newValue}`);
  };

  let breadcrumbTitle = '';
  let breadcrumbHeading = '';

  switch (tab) {
    case 'backlogs':
      breadcrumbTitle = 'Backlogs';
      breadcrumbHeading = 'Backlogs';
      break;
    case 'board':
    default:
      breadcrumbTitle = 'Board';
      breadcrumbHeading = 'Taskboard';
  }

  let breadcrumbLinks = [
    { title: 'Home', to: APP_DEFAULT_PATH },
    { title: 'Kanban', to: '/apps/kanban/board' },
    { title: breadcrumbTitle }
  ];
  if (tab === 'board') {
    breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Kanban' }];
  }

  useEffect(() => {
    if (menuMaster.openedItem !== 'kanban') handlerActiveItem('kanban');
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <>
      <Breadcrumbs custom heading={breadcrumbHeading} links={breadcrumbLinks} />
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Tabs value={value} variant="scrollable" onChange={handleChange}>
              <Tab value="board" label={value === 'board' ? 'Board' : 'View as Board'} {...a11yProps('board')} />
              <Tab value="backlogs" label={value === 'backlogs' ? 'Backlogs' : 'View as Backlog'} {...a11yProps('backlogs')} />
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            {tab === 'board' && <Board />}
            {tab === 'backlogs' && <Backlogs />}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
