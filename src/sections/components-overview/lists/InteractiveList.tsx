'use client';

import { cloneElement, useState } from 'react';

// next
import Image from 'next/legacy/image';

// material-ui
import { styled } from '@mui/material/styles';
import {
  Box,
  Checkbox,
  Grid,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';

// project import
import IconButton from 'components/@extended/IconButton';
import AntAvatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';

// assets
import { DeleteFilled, FolderOpenFilled } from '@ant-design/icons';

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value
    })
  );
}

const ListWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}));
ListWrapper.displayName = 'ListWrapper';

// ==============================|| LIST - INTERACTIVE ||============================== //

export default function InteractiveList() {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  return (
    <MainCard>
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />}
            label="Enable dense"
          />
          <FormControlLabel
            control={<Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)} />}
            label="Enable secondary text"
          />
        </FormGroup>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Typography sx={{ mt: 3 }} variant="h5" component="div">
              Text only
            </Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem divider>
                    <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h5" sx={{ mt: { xs: 0, lg: 3 } }} component="div">
              Icon with text
            </Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem divider>
                    <ListItemIcon sx={{ mr: 0.5 }}>
                      <FolderOpenFilled />
                    </ListItemIcon>
                    <ListItemText primary="Single item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} xl={6}>
            <Typography variant="h5" component="div">
              Avatar with text
            </Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem divider>
                    <ListItemAvatar>
                      <AntAvatar>
                        <Image alt="Natacha" src="/assets/images/users/vector-1.png" width={30} height={30} />
                      </AntAvatar>
                    </ListItemAvatar>
                    <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
          <Grid item xs={12} xl={6}>
            <Typography variant="h5" component="div">
              Avatar with text and icon
            </Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem
                    divider
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteFilled />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <AntAvatar alt="Avatar" src="/assets/images/users/avatar-4.png" />
                    </ListItemAvatar>
                    <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
}
