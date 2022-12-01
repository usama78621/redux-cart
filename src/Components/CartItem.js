import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const CartItem = ({ item }) => {
  const { img, title, price } = item;
  return (
    <Box
      component="article"
      sx={{
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "auto 1fr auto",
        gridColumnGap: "1.5rem",
        margin: "1.5rem 0rem",
      }}
    >
      <img
        src={img}
        style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
      />
      <Box component="div">
        <Typography>{title}</Typography>
        <Typography>{price}</Typography>
        <Button variant="text" sx={{ textTransform: "capitalize" }}>
          Remove
        </Button>
      </Box>
      <Box component="div">
        <Typography sx={{ margin: "0px" }}>
          <IconButton color="primary" aria-label="add to shopping cart">
            <KeyboardArrowUpIcon />
          </IconButton>
        </Typography>
        <Typography>
          <Typography sx={{ textAlign: "center" }}>{0}</Typography>
          <IconButton color="primary" aria-label="add to shopping cart">
            <KeyboardArrowDownIcon />
          </IconButton>
        </Typography>
      </Box>
    </Box>
  );
};

export default CartItem;
