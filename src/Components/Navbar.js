import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ShoppingBagSharp } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { connect } from "react-redux";

const Navbar = ({ amount }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6" component="div">
            Redux Cart
          </Typography>
          <div>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={amount} color="secondary">
                <ShoppingBagSharp />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

function mapStateToProps(state) {
  return { amount: state.amount };
}

export default connect(mapStateToProps)(Navbar);
