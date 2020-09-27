import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeaderWrapper from "./components/header";
import Homepage from "./views/Homepage";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <HeaderWrapper />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
