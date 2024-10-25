import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Input, InputAdornment, TextField, Typography } from '@mui/material';

function Search() {
  return (
    <div className='pl-5'>
      <TextField  sx={{background:"#202020", borderRadius:'20px',}} id="outlined-basic" size='small' placeholder='Search game by ID or Name'  slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }} />
      </div>
  )
}

export default Search
