import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import OTP from "./Otp";
import background from "./splashScreen.png";
import GradientButton from "react-linear-gradient-button";

const GetNumber = () => {
  const [data, setData] = useState(false);
  function getPhone(e) {
    var nmbr = e.target.value;
    {
      nmbr === "03215371212" ? setData(true) : setData(false);
    }
  }
  function handleClick() {
    data ? (document.location.href = "Otp") : (document.location.href = "");
  }
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
        backgroundImage: `url(${background})`, //
        backgroundColor: "rgba(0,0,0,0.9)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1> SIGN IN</h1>
      <div
        style={{
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          padding: 20,
        }}
      >
        {/* <h5>Phone </h5> */}
        <div>
          <a style={{ fontSize: 28, fontWeight: "bold" }}>Carrier : </a>
          <input
            autocomplete="off"
            type="text"
            name="carrier"
            placeholder="Ufone"
            style={{
              height: "40px",
              width: "250px",
              fontSize: 28,
              fontWeight: 300,
              marginBottom: 20,
            }}
          />
        </div>
        <div>
          {" "}
          <a style={{ fontSize: 28, fontWeight: "bold" }}>Phone : </a>
          <input
            onChange={getPhone}
            autocomplete="off"
            type="number"
            name="phone"
            placeholder="03319222911"
            oninput="this.value=this.value.slice(0,this.maxLength)"
            maxlength="11"
            style={{
              height: "40px",
              width: "250px",
              fontSize: 28,
              fontWeight: 300,
              // marginTop: 20,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignContent: "flex-end",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          {/* <Link to="/Otp" style={{ textDecoration: "none" }}> */}{" "}
          <GradientButton
            gradient={["#4CCBF3", "#3BA3EE"]}
            background="transparent"
            borderRadius="14px"
            color="#ffffff"
            fontSize="18px"
            fontWeight="400"
            position="absolute"
            onClick={handleClick}
            style={{
              width: "354px",
              height: "64px",
              marginBottom: "35px",
              top: "797",
              paddingTop: "11px",
              marginTop: 50,
              flexGrow: 1,
            }}
          >
            Verify & Continue
          </GradientButton>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};
export default GetNumber;
