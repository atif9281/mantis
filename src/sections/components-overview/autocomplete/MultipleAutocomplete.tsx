'use client';

// material-ui
import { Autocomplete, Chip, TextField } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import data from 'data/movies';

// ==============================|| AUTOCOMPLETE - MULTIPLE ||============================== //

export default function MultipleAutocomplete() {
  return (
    <MainCard title="Multiple Tags">
      <Autocomplete
        multiple
        id="tags-outlined"
        options={data}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.key}>
              {option.label}
            </li>
          );
        }}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => <Chip {...getTagProps({ index })} key={option.key} label={option.label} />);
        }}
        getOptionLabel={(option) => option.label}
        defaultValue={[data[7], data[13]]}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} placeholder="Favorites" />}
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
