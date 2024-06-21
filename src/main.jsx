import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LovedThings } from "./components/lovedThings/index";
import { lovedThingsData } from "./components/lovedThings/lovedThingsData";
import { TimeTogether } from "./components/timeTogether";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <TimeTogether />

      <div className="lovedContainer">
        <div className="lovedHeader">
          <h1>Coisas que minha namorada ama ❤️</h1>
        </div>

        <div className="lovedBody">
          {lovedThingsData.map((item) => (
            <div key={item.id} className="dataDiv">
              <LovedThings title={item.name} image={item.imageSrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </React.StrictMode>
);
