import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Button, Card, CardActions, Chip, Grid } from "@mui/material";
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
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="Fortnite"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="All Games"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="Roblox"
    color="success"
    icon={
      <CasinoIcon
        className="rotate-45"
        fontSize="small"
        color="red"
        sx={{ color: "#BF0000" }}
      />
    }
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="Minecraft"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# Popularity"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# for women"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# Active Players"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# High rate"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# Hot"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# FFA"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# RPG"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# Creators love"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="Roblox"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="Gta"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="Fortnite"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="Minecraft"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# Popularity"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# for women"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# Active Players"
    variant="outlined"
  />
  <Chip
    sx={{
      color: "white",
      "&:hover": { cursor: "pointer", backgroundColor: "#B2BEB5" },
    }}
    label="# High rate"
    variant="outlined"
  />
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
  {Data.map((row, index) => (
    <Card key={index} sx={{ minWidth: 285 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
        title="green iguana"
      />
      <CardContent className="bg-slate-900 text-white">
        <Box className="pr-3">
          <Typography gutterBottom variant="h6" component="div">
            <b>{row.title}</b>
          </Typography>
        </Box>
        <Box className="pr-3">
          <Box className="flex justify-between">
            <Box className="flex gap-1 justify-center content-center">
              <AccountCircleIcon fontSize="small" />
              <Typography variant="body2" sx={{ color: "gray" }}>
                {row.subtitle}
              </Typography>
            </Box>
            <Box className="flex gap-1 justify-center">
              <SentimentSatisfiedAltIcon
                sx={{ color: "green" }}
                fontSize="small"
              />
              <Typography
                style={{ color: "green", ml: 1 }}
                variant="body2"
              >
                96%
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                873 Votes
              </Typography>
            </Box>
          </Box>
          <Box className="flex justify-between pt-5">
            <Box className="flex justify-between">
              <Box className="mt:20">
                <SportsEsportsIcon />
              </Box>
              <Box>
                <Typography>Online</Typography>
                <Typography>
                  <b>1,858</b>
                </Typography>
              </Box>
            </Box>
            <Box className="flex">
              <Box>
                <LanguageIcon />
              </Box>
              <Box>
                <Typography>Visits</Typography>
                <Typography>
                  <b>11M</b>
                </Typography>
              </Box>
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
            transform: "none",
            border: "1px solid #404040",
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
