import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Button, Card, CardActions, Chip, Grid, Menu, MenuItem, useMediaQuery } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LanguageIcon from "@mui/icons-material/Language";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "./Search";
import Sortby from "./Sortby";
import CasinoIcon from "@mui/icons-material/Casino";
function Category() {
  let Data = [
    {
      id: 1,
      title: "Twilight Daycare",
      subtitle: "Nickname",
      image:
        "https://tr.rbxcdn.com/180DAY-f67ef95be1039205aedc967060db3b61/768/432/Image/Webp/noFilter",
    },
    {
      id: 2,
      title: "Twilight Daycare",
      subtitle: "Nickname",
      image:
        "https://tr.rbxcdn.com/180DAY-f67ef95be1039205aedc967060db3b61/768/432/Image/Webp/noFilter",
    },
    {
      id: 3,
      title: "Twilight Daycare",
      subtitle: "Nickname",
      image:
        "https://tr.rbxcdn.com/180DAY-f67ef95be1039205aedc967060db3b61/768/432/Image/Webp/noFilter",
    },
    {
      id: 4,
      title: "Twilight Daycare",
      subtitle: "Nickname",
      image:
        "https://tr.rbxcdn.com/180DAY-f67ef95be1039205aedc967060db3b61/768/432/Image/Webp/noFilter",
    },
    {
      id: 5,
      title: "Twilight Daycare",
      subtitle: "Nickname",
      image:
        "https://tr.rbxcdn.com/180DAY-f67ef95be1039205aedc967060db3b61/768/432/Image/Webp/noFilter",
    },
    {
      id: 5,
      title: "Twilight Daycare",
      subtitle: "Nickname",
      image:
        "https://tr.rbxcdn.com/180DAY-f67ef95be1039205aedc967060db3b61/768/432/Image/Webp/noFilter",
    },
    {
      id: 5,
      title: "Twilight Daycare",
      subtitle: "Nickname",
      image:
        "https://tr.rbxcdn.com/180DAY-f67ef95be1039205aedc967060db3b61/768/432/Image/Webp/noFilter",
    },
    {
      id: 5,
      title: "Twilight Daycare",
      subtitle: "Nickname",
      image:
        "https://tr.rbxcdn.com/180DAY-f67ef95be1039205aedc967060db3b61/768/432/Image/Webp/noFilter",
    },
  ];
  const allChips = [
    "Fortnite", "All Games", "Roblox", "Minecraft", "# Popularity", 
    "# for women", "# Active Players", "# High rate", "# Hot", 
    "# FFA", "# RPG", "# Creators love", "Gta", "# Popularity", 
    "# for women", "# Active Players", "# High rate",
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const visibleChips = isMediumScreen ? allChips : allChips.slice(0, 6);

  const handleMoreClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <div className="flex justify-between items-center p-5 sm:pr-10 md:mr-8">
        <Typography className="flex item-center gap-2">
          <CasinoIcon
            className="rotate-45"
            color="red"
            sx={{ color: "#BF0000" }}
          />
          <b>Roblox</b>
        </Typography>
        <Typography>
          <b>7,021 Games</b>
        </Typography>
      </div>
      <div className="flex flex-wrap gap-1 items-center pl-5 pr-5 pb-5 max-w-full text-white overflow-x-auto">
      {visibleChips.map((label, index) => (
        <Chip
          key={index}
          label={label}
          sx={{
            color: "white",
            "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
          }}
          variant="outlined"
          icon={label === "Roblox" ? <CasinoIcon sx={{ color: "#BF0000" }} /> : null}
        />
      ))}

      {/* Show "More" button if on small screen */}
      {!isMediumScreen && (
        <>
          <Button onClick={handleMoreClick} variant="text" sx={{ color: "green", borderColor: "white" , textTransform:'none'}}>
            More..
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {allChips.slice(4).map((label, index) => (
              <MenuItem key={index} onClick={handleClose}>
                <Typography>{label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </div>


      <div className="flex justify-between items-center pl-5 pr-5 md:pr-10 sm:flex-none md:flex-none">
        <Box className="flex items-center ">
          <Typography>
            <b>All Games</b>
          </Typography>
          <Search />
        </Box>
        <Sortby />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
  {Data.map((row, index) => (
    <Card key={index} className="bg-slate-900 text-white rounded-lg overflow-hidden shadow-md">
          <CardMedia
            className="h-40 sm:h-52 md:h-56 lg:h-60 w-full object-cover"
            image={row.image}
            title={row.title}
          />
          <CardContent className="bg-slate-900 text-white">
            <Typography variant="h6" component="div" className="font-bold text-lg">
              {row.title}
            </Typography>
            <Box className="flex justify-between mt-2 text-sm text-gray-400">
              <Box className="flex items-center gap-1">
                <AccountCircleIcon fontSize="small" />
                <Typography variant="body2">{row.subtitle}</Typography>
              </Box>
              <Box
  className="flex items-center gap-1"
  sx={{
    flexDirection: {
      xs: "column", // stack items vertically on extra small screens
      sm: "row"     // arrange items in a row on small screens and up
    },
    gap: {
      xs: 0.5, // reduce the gap on smaller screens
      sm: 1,   // normal gap on larger screens
    },
  }}
>
  <SentimentSatisfiedAltIcon
    fontSize="small"
    sx={{
      color: "green",
      marginBottom: { xs: "4px", sm: "0" } // add margin for spacing when stacked
    }}
  />
  <Typography
    variant="body2"
    sx={{
      color: "green",
      fontSize: { xs: "0.8rem", sm: "1rem" } // smaller font on small screens
    }}
  >
    96%
  </Typography>
  <Typography
    variant="body2"
    sx={{
      color: "gray",
      fontSize: { xs: "0.8rem", sm: "1rem" }
    }}
  >
    873 Votes
  </Typography>
</Box>

            </Box>
            <Box className="flex justify-between mt-4">
              <Box className="flex gap-2 items-center">
                <SportsEsportsIcon />
                <Box>
                  <Typography variant="body2">Online</Typography>
                  <Typography variant="body2"><b>1,858</b></Typography>
                </Box>
              </Box>
              <Box className="flex gap-2 items-center">
                <LanguageIcon />
                <Box>
                  <Typography variant="body2">Visits</Typography>
                  <Typography variant="body2"><b>11M</b></Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
          <CardActions className="bg-slate-900">
            <Button
              fullWidth
              variant="outlined"
              className="hover:bg-green-600"
              sx={{
                color: "white",
                borderColor: "#404040",
              }}
            >
              <b>View Game</b>
            </Button>
          </CardActions>
        </Card>
  ))}
</div>


    </div>
  );
}

export default Category;
