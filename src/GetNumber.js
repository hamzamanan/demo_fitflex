import "./App.css";
import "./style.css";
import background from "./splashScreen.png";
import { userSignup } from "./requests.js";
import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import ReactCountryFlag from "react-country-flag";
import GradientButton from "react-linear-gradient-button";
import { Link, useHistory } from "react-router-dom";

function GetNumber() {
  const history = useHistory();
  const [data, setData] = useState(false);
  const [nmbr, setNmbr] = useState();
  const [msdn, setMsdn] = useState();
  // "MjI=" sir raos key
  function getPhone(e) {
    var num = e.target.value;
    setNmbr(num);
  }
  function handleClick() {
    // console.log(nmbr);
    const user = {
      msisdn: nmbr,
    };
    console.log(user);
    userSignup(user).then((result) => {
      history.push({ pathname: "/otp", state: { msis: result.data } });
    });
    // console.log(msdn);
  }
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div style={container}>
      <BottomSheet open={open}>
        <div style={signintext}>Let's Start</div>
        <div
          style={{
            textAlign: "center",
            color: "#979797",
            display: "flex",
            justifyContent: "center",
            paddingLeft: 43,
            paddingRight: 49,
          }}
        >
          Please Enter Your Number To Continue
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
            countryCode="PK"
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
          {/* {data ? (
            <Link
              to={{
                pathname: "/otp",
                state: { Number: msdn },
              }}
              style={{ textDecoration: "none" }}
            > */}
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
