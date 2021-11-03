import React from "react";
import { Link } from "react-router-dom";

import background from "./splashScreen.png";
import logo from "./fitflex.png";
import GradientButton from "react-linear-gradient-button";

const DownloadLink = () => {
  return (
    <div
      style={{
        backgroundColor: "#131313",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        padding: 20,
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundImage: `url(${background})`,
        backgroundColor: "rgba(0,0,0,0.9)",
        // bg position is center and 0.9 is the opacity of the above color,
        // bg image is imported as background and is sent to cover the whole screen, text color is set to white
        // padding is 20 by default
        // 100 vw means 100% of viewport width and 100vh means viewport height
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={logo} style={{ width: 350, height: 300, marginTop: -100 }} />
      <h1>Welcome To Fitflex </h1>
      <p style={{ fontSize: 25 }}>Your Download Link is :</p>
      <a
        href="https://fitflexapp.com"
        style={{ fontSize: 30, color: "#0c7aff" }}
      >
        https://fitflexapp.com
      </a>
    </div>
  );
};
export default DownloadLink;
