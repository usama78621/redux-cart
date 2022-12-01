import React from "react";
import { Box, Typography } from "@mui/material";
import CartItem from "./Components/CartItem";
import cart from "./Cart_item";
import { connect } from "react-redux";

const CartContainer = () => {
  if (cart.length === 0) {
    return (
      <Box component="div" sx={{ width: "90vw", margin: "40px auto" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            textTransform: "capitalize",
            marginBottom: "4rem",
            fontWeight: "550",
          }}
        >
          YOUR BAG
        </Typography>
        <Typography sx={{ textAlign: "center" }}>is currently empty</Typography>
      </Box>
    );
  }
  return (
    <Box
      component="section"
      sx={{
        width: "90vw",
        margin: "40px auto",
        padding: "2.5rem",
        maxWidth: "50rem",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        YOUR BAG
      </Typography>
      {cart.map((item, i) => {
        return <CartItem key={i} item={item} />;
      })}
    </Box>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return { ...state };
}

export default connect(mapStateToProps)(CartContainer);
