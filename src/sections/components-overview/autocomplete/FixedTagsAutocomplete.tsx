'use client';

import { useState } from 'react';

// material-ui
import { Autocomplete, Chip, TextField } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import data from 'data/movies';

// ==============================|| AUTOCOMPLETE - FIXED TAGES ||============================== //

export default function FixedTagsAutocomplete() {
  const fixedOptions = [data[6]];
  const [value, setValue] = useState([...fixedOptions, data[13]]);

  return (
    <MainCard title="Fixed Options">
      <Autocomplete
        multiple
        fullWidth
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue([...fixedOptions, ...newValue.filter((option) => fixedOptions.indexOf(option) === -1)]);
        }}
        options={data}
        getOptionLabel={(option) => option.label}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option: any, index: number) => (
            <span key={index}>
              <Chip label={option.label} {...getTagProps({ index })} disabled={fixedOptions.indexOf(option) !== -1} key={option.key} />
            </span>
          ))
        }
        renderInput={(params) => <TextField {...params} placeholder="Fixed Tag" />}
        sx={{
          '& .MuiOutlinedInput-root': {
            p: 1
          },
          '& .MuiAutocomplete-tag': {
            bgcolor: 'primary.lighter',
            border: '1px solid',
            borderColor: 'primary.light',
            '& .MuiSvgIcon-root': {
              color: 'primary.main',
              '&:hover': {
                color: 'primary.dark'
              }
            }
          }
        }}
      />
    </MainCard>
  );
}
