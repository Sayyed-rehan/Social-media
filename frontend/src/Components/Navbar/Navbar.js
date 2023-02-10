import React from "react";
import { AppBar, Box,  InputBase,  Toolbar, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter, Menu } from "@mui/icons-material/";

const Navbar = () => {
  return (
    <div>
      <AppBar position={'static'}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", backgroundColor:"black" }}>
          <Box sx={{ display: "flex" }} gap={1}>
            <Facebook />
            <Instagram />
            <Twitter />
          </Box>
          <Box sx={{ display: {xs:"none", sm:"none", md:"flex"}}} fontSize="14px" gap={3}>
            <Typography>Home</Typography>
            <Typography>Product</Typography>
            <Typography>Portfolio</Typography>
            <Typography>Blog</Typography>
          <Typography>Contact</Typography>
          </Box>
          <InputBase placeholder="Search..."  sx={{color:"white"}}/>
          <Menu sx={{color:"white", display:{xs:"block", sm:"block", md:"none"}}}/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
