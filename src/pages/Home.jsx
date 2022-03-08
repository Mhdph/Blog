import React from "react";
import "../style/Home.css";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
