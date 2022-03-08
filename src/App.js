import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Home />
      </div>
    );
  }
}

export default App;
