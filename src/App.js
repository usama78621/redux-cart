import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CartContainer from "./Cart";
import CartItem from "./Cart_item";
import { reducer } from "./reducer/CartReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#85c6f4",
      },
    },
  });

  const initialState = {
    cart: CartItem,
    total: 0,
    amount: 1,
  };


  const store = createStore(reducer, initialState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <CartContainer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
