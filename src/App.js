import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderWrapper from "./components/header";
import Homepage from "./views/Homepage";
import Footer from "./components/footer";
import Products from "./views/Products";

function App() {
  return (
    <BrowserRouter>
      <HeaderWrapper />
      <Switch>
        <Route exact path="/" component={() => <Homepage />} />
        <Route exact path="/products" component={() => <Products />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
