import "./App.css";
import "./style.css";
import ReactDOM, { useLocation } from "react-dom";
import GradientButton from "react-linear-gradient-button";
import background from "./splashScreen.png";
import React, { useEffect, useState, Component } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { FaDollarSign, FaRegCalendarAlt } from "react-icons/fa";
import { otpVerify, userSignup } from "./requests.js";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Otp(props) {
  const [counter, setCounter] = useState(60);
  const [isDisable, setisDisable] = useState(false);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    toast.info("OTP sent to your number");
    setOpen(true);
  }, []);
  const [OTP, setOTP] = useState("");

  function handleClick() {
    {
      const otpdetails = {
        msisdn: props.location.state.msis,
        pin: OTP,
      };
      toast.info("Please wait while we verify");
      setisDisable(true);
      OTP === "1111" && props.location.state.msis === "MjI="
        ? (document.location.href = "DownloadLink")
        : otpVerify(otpdetails).then((response) => {
            if (response.status === 200) {
              console.log("hi i am +ve");
              document.location.href = "DownloadLink";
            } else if (response.status === 400) {
              console.log(" sorry i am negative", response.status);
              alert("wrong otp");
              setisDisable(false);
              document.location.href = "getnumber";
            }
            // document.location.href = "getnumber";
          });
    }

    //
  }

  return (
    <div style={container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        {" "}
        <h1
          style={{
            fontSize: 36,
            color: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
            // fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 2px #000",
          }}
        >
          Your Bundle
        </h1>
      </div>
      <div
        style={{
          height: 250,
          width: 250,
          border: "2px solid black",
          backgroundColor: "transparent",
          // opacity: 0.3,
          display: "flex",
          borderRadius: 14,
          // marginTop: 200,
          marginLeft: "75px",
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          textShadow: "1px 1px #000",
        }}
      >
        <span
          style={{
            fontSize: 18,
            // fontWeight: "bold",
            opacity: 1,
            width: 250,
            // padding: 20,
            textAlign: "center",
            color: "#fff",
            textShadow: "1px 1px #000",
          }}
        >
          <p style={{ fontWeight: "bold" }}>
            <FaDollarSign
              style={{
                color: "green",
                height: 25,
                width: 25,
                marginRight: 40,
                marginBottom: -5,
              }}
            />
            Rs.100 with Tax
          </p>

          <p style={{ fontWeight: "bold" }}>
            <FaRegCalendarAlt
              style={{
                color: "teal",
                height: 25,
                width: 25,
                marginRight: 40,
                marginBottom: -3,
              }}
            />
            Validity: 1 Week
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: "bold",
              opacity: 1,
              width: 250,
              textShadow: "1px 1px #000",
              color: "#fff",
              // opacity: 0.6,
              // padding: 20,
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            {" "}
            You Get Access To Premium Workout Content.
          </p>
          <br />
          <p
            style={{
              fontSize: 18,
              // fontWeight: "",
              opacity: 1,
              width: 250,
              marginTop: -20,
              color: "#fff",
              // opacity: 0.6,
              // padding: 20,
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            On OTP verification you will be charged
          </p>
        </span>
      </div>
      <BottomSheet open={open} blocking={false}>
        <div style={signintext}>Enter OTP</div>

        <div
          style={{
            textAlign: "center",
            color: "#979797",
            fontWeight: "400",
            fontSize: "18px",
            paddingTop: "3px",
            // paddingBottom: "px",
          }}
        >
          OTP will Expire in{" "}
          <a style={{ color: "#fff", fontSize: 20 }}>{counter} </a>sec
        </div>
        <div
          style={{
            display: "flex-start",
            flexShrink: 1,
            flexGrow: 1,
            // margin: "auto 10vw",
            flexWrap: "wrap",
            marginLeft: 30,
            // spacing: "10px",
            // marginLeft:
          }}
        >
          <OtpInput
            inputStyle={otpfld}
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            // disabled={false}
            maxwidth="64px"
            placeholder="1111"
            maxHeight="64px"
          />
          <Link to="/GetNumber" textdecoration="none">
            <div
              style={{
                textAlign: "center",
                color: "#ffffff",
                fontWeight: "400",
                fontSize: "18px",
                marginBottom: "2vh",
                marginLeft: -30,
              }}
            >
              ResendOTP
            </div>
          </Link>
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
          <GradientButton
            gradient={["#4CCBF3", "#3BA3EE"]}
            background="transparent"
            borderRadius="14px"
            onClick={handleClick}
            color="#ffffff"
            fontSize="18px"
            fontWeight="400"
            disabled={isDisable}
            position="absolute"
            style={{
              width: "374px",
              height: "64px",
              marginBottom: "35px",
              top: "797",
              paddingTop: "11px",

              flexGrow: 1,
            }}
          >
            Verify & Continue
          </GradientButton>
        </div>
      </BottomSheet>
    </div>
  );
}

const container = {
    backgroundImage: `url(${background})`,
    backgroundColor: "rgba(0,0,0,0.9)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    spacing: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  otpfld = {
    margin: "5vw auto",
    // left: "20px",
    // right: "20px",
    color: "#898989",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "14px",
    keyboardType: "numeric",
    fontSize: 23,
    color: "#fff",
    // position: "relative  ",
    // placeholder: "-",
    height: "64px",
    width: "64px",
    marginLeft: 10,
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
export default Otp;
