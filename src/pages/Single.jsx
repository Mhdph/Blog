import React from "react";
import "../style/Single.css";
import Singlepost from "../components/Singlepost";
import Sidebar from "../components/Sidebar";
export default function Single() {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
}
