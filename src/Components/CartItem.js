import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { connect } from "react-redux";
const CartItem = ({
  img,
  title,
  amount,
  price,
  remove,
  increase,
  decrease,
}) => {
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
        <Button
          variant="text"
          s
          onClick={() => remove()}
          sx={{ textTransform: "capitalize" }}
        >
          Remove
        </Button>
      </Box>
      <Box component="div">
        <Typography sx={{ margin: "0px" }}>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={() => increase()}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Typography>
        <Typography>
          <Typography sx={{ textAlign: "center" }}>{amount}</Typography>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={() => decrease()}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Typography>
      </Box>
    </Box>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  const { id, amount } = ownProps;
  return {
    remove: () => dispatch({ type: "REMOVE", payload: { id } }),
    increase: () => dispatch({ type: "INCREASE", payload: { id } }),
    decrease: () => dispatch({ type: "DECREASE", payload: { id,amount } }),
  };
}

export default connect(null, mapDispatchToProps)(CartItem);
