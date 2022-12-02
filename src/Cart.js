import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import CartItem from "./Components/CartItem";
import { connect } from "react-redux";

const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [dispatch, cart]);

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
        return <CartItem key={i} {...item} />;
      })}
      <hr />
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </Button>
        <Typography>${total}</Typography>
      </Box>
    </Box>
  );
};

function mapStateToProps(state) {
  let { cart, total } = state;
  return { total, cart };
}

export default connect(mapStateToProps)(CartContainer);
