import React from "react";
import "./App.css";
import Video from "./Video.mp4";

function App() {
  return (
    <div className="App">
        <video controls autostart autoPlay src={Video} type="video/mp4" />
    </div>
  );
}

export default App; 