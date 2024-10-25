import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";


function Sortby() {
  const pages = [" Popularity", "Price", "Rate" , "Alphabet"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return(
    <div className="flex flex-wrap justify-end gap-4 items-center text-sm sm:text-base p-2">
  <Box className="hidden lg:block">
  <Typography>Sort by:</Typography>
</Box>
    {/* Display for larger screens */}
    <Box className="hidden md:flex flex-grow">
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  
    {/* Display for smaller screens */}
    <Box className="flex md:hidden flex-grow">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography sx={{ textAlign: "center" }}>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  </div>
  

  )
}

export default Sortby
