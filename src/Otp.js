import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import background from "./splashScreen.png";
import GradientButton from "react-linear-gradient-button";
import OTPInput, { ResendOTP } from "otp-input-react";

const Otp = () => {
  const [OTP, setOTP] = useState("****");

  function handleClick() {
    console.log("hi");
    {
      OTP === "1111"
        ? (document.location.href = "DownloadLink")
        : (document.location.href = "");
    }
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
        backgroundImage: `url(${background})`,
        backgroundColor: "rgba(0,0,0,0.9)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Enter OTP</h1>
      <div style={{ marginLeft: 20 }}>
        {" "}
        <OTPInput
          inputStyles={otpfld}
          // marginRight=  "10"
          value={OTP}
          onChange={setOTP}
          autoFocus="false"
          OTPLength={4}
          otpType="number"
          disabled={false}
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
  );
};

const otpfld = {
  margin: "5vw auto",
  color: "#fff",

  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "14px",
  keyboardType: "numeric",
  fontSize: 30,
  height: "64px",
  width: "64px",
};

export default Otp;
