'use client';

import { useState } from 'react';

// material-ui
import { Box } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

// third-party
import isWeekend from 'date-fns/isWeekend';

// project import
import MainCard from 'components/MainCard';

// ==============================|| DATE PICKER - LANDSCAPE ||============================== //

export default function LandscapeDatePicker() {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <MainCard title="Landscape">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ '.MuiCalendarPicker-root': { width: '100%' }, '.MuiPickersCalendarHeader-labelContainer': { maxHeight: 40 } }}>
          <StaticDatePicker<Date>
            orientation="landscape"
            openTo="day"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </LocalizationProvider>
    </MainCard>
  );
}
