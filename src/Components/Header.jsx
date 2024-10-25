import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SpaIcon from "@mui/icons-material/Spa";
import SourceIcon from "@mui/icons-material/Source";
import { MdOutlineSource } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Chip } from "@mui/material";

const pages = ["Find Creators", "Qoutes", "Games"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const advanceSettings = ["My Games", "Wallet", "Notification"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  return (
    <AppBar className="bg-slate-900	">
      <Container sx={{ backgroundColor: "rgb(0,0,0,.9)" }} maxWidth="xl">
        <Toolbar disableGutters>
          <SpaIcon
            sx={{  mr: 1, color:'green' }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "green",
              textDecoration: "none",
            }}
          >
            SOCIALSEED
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
       
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
          <Box className="hidden md:flex items-center gap-2 " sx={{ mr: "20px" }}>
            {/* <Button
            size="small"
              sx={{ border: "1px solid green", color: "white" , mr:2}}
              variant="outlined"
            >
              My Games
            </Button> */}
            <Chip

              sx={{ color: "white", border: "1px solid green" }}
              label="My Games"
              variant="outlined"
            />
            <Avatar
              sx={{
                backgroundColor: "rgb(32,32,32)",
                "&:hover": { cursor: "pointer" },
              }}
            >
              <MdOutlineSource />
            </Avatar>
            <Avatar
              sx={{
                backgroundColor: "rgb(32,32,32)",
                "&:hover": { cursor: "pointer" },
              }}
            >
              <IoIosNotifications />
            </Avatar>
          </Box>
          <Box className="flex gap-2">
            <Box className='hidden md:block'>
              <Typography color="gray" sx={{ fontSize: "90%" }}>
                Balance
              </Typography>
              <Typography sx={{ fontSize: "90%" }}>$ 2,021.56</Typography>
            </Box>
            <Tooltip
              sx={{ backgroundColor: "rgb(32,32,32)" }}
              title="Open settings"
            >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Dalip"
                  src="https://store.playstation.com/store/api/chihiro/00_09_000/container/BR/en/99/UP1112-CUSA06917_00-AV00000000000166/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=672&h=672"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
              <Box className=' md:hidden'>
              {advanceSettings.map((aSetting) => (
                <MenuItem key={aSetting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {aSetting}
                  </Typography>
                </MenuItem>
              ))}
              </Box>
        
           
            </Menu>
            </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
