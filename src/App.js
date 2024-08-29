import React from "react";
import Sidebar from "./components/Sidebar";
import CentralContent from "./components/CentralContent";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <CentralContent />
    </div>
  );
};

export default App;
