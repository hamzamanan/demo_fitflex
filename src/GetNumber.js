import "./App.css";
import "./style.css";
import background from "./splashScreen.png";
// import background from "../assets/images/splashScreen.png";
import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import ReactCountryFlag from "react-country-flag";
import GradientButton from "react-linear-gradient-button";

function GetNumber() {
  const [data, setData] = useState(false);
  function getPhone(e) {
    var nmbr = e.target.value;

    {
      nmbr === "03215371212" ? setData(true) : setData(false);
    }
  }
  function handleClick() {
    // toast("Wow so easy!");
    {
      data ? (document.location.href = "Otp") : (document.location.href = "");
    }
  }
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div style={container}>
      <BottomSheet open={open}>
        <div style={signintext}>Sign in</div>
        <div
          style={{
            textAlign: "center",
            color: "#979797",
            display: "flex",
            justifyContent: "center",
            paddingLeft: 33,
            paddingRight: 49,
          }}
        >
          We’ll text you a verification code. Message and data rates may apply.
        </div>
        <div
          style={{
            height: "64px",
            width: "374px",
            borderRadius: "14px",
            margin: "20px",
            backgroundColor: "#FFFFFF1A",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <ReactCountryFlag
            style={{ margin: "20px", width: "28px", height: "14px" }}
            countryCode="AE"
            svg
          />
          <p style={{ color: "#898989", fontSize: "20px", marginTop: "10px" }}>
            |
          </p>
          <input
            onChange={getPhone}
            style={{
              height: "64px",
              width: "310px",
              borderWidth: 0,
              backgroundColor: "transparent",
              outline: "none",
              paddingLeft: 20,
              color: "#898989",
              fontSize: 24,
              fontWeight: 400,
            }}
            type="number"
            name="phone"
            id="phone"
            placeholder="+971 28953 78951"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <GradientButton
            gradient={["#4CCBF3", "#3BA3EE"]}
            background="transparent"
            borderRadius="14px"
            color="#ffffff"
            fontSize="18px"
            fontWeight="400"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            // paddingTop="90"
            // position="absolute"
            padding="15"
            onClick={handleClick}
            style={{ width: 374, height: 64, paddingTop: 8 }}
            raised
          >
            Continue
          </GradientButton>
        </div>
      </BottomSheet>
    </div>
  );
}

const container = {
    backgroundImage: `url(${background})`,
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    spacing: 8,
  },
  txtinput = {
    maxwidth: "374px",
    // maxheight: "100px",
    // minheight: "100px",
    height: 64,
    minWidth: "90vw",
    margin: "5vw auto",
    left: "20px",
    right: "20px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "14px",
    keyboardType: "numeric",
    fontSize: "18px",
    color: "#898989",
    position: "relative",
  },
  signintext = {
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    // padding: "60px",
    // paddingTop: "10%",
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    // textTransform: "capitalize",
  };
export default GetNumber;
