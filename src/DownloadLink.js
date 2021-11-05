import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import background from "./splashScreen.png";
import logo from "./fitflex.png";
import GradientButton from "react-linear-gradient-button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={logo} style={{ width: 350, height: 300, marginTop: -100 }} />
      <h1>Welcome To Fitflex </h1>
      <p style={{ fontSize: 25, marginBottom: -30 }}>
        You've been charged Successfully{" "}
      </p>
      <p style={{ fontSize: 25 }}>Your Download Link is :</p>

      <a
        href="https://fitflexapp.com"
        style={{ fontSize: 30, color: "#0c7aff" }}
      >
        https://yourLink.com
      </a>
    </div>
  );
};
export default DownloadLink;
