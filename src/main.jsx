import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LovedThings } from "./components/lovedThings/index";
import { lovedThingsData } from "./components/lovedThingsData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mainDiv">
      <div className="mainHeader">
        <h1>Coisas que minha namorada ama ❤️</h1>
      </div>

      <div className="mainBody">
        {lovedThingsData.map((item) => (
          <div key={item.id} className="dataDiv">
            <LovedThings title={item.name} image={item.imageSrc} />
          </div>
        ))}
      </div>
    </div>
  </React.StrictMode>
);
