import "./App.css";
import "./style.css";
import ReactDOM, { useLocation } from "react-dom";
import GradientButton from "react-linear-gradient-button";
import background from "./splashScreen.png";
import React, { useEffect, useState, Component } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { otpVerify } from "./requests.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Otp(props) {
  const [counter, setCounter] = useState(60);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    toast.info("OTP sent to your number");
    // console.log("THIS IS NUMBER", props);
    var nmbr = props.location.state.Number;
    console.log("Ths is msisdn", props.location.state.Number);
    setOpen(true);
  }, []);
  const [OTP, setOTP] = useState("");

  function handleClick() {
    {
      OTP === "1111"
        ? (document.location.href = "DownloadLink")
        : (document.location.href = "");
    }
    const otpdetails = {
      msisdn: "NDA=",
      pin: OTP,
    };
    //
    otpVerify(otpdetails).then();
  }

  return (
    <div style={container}>
      <div style={{ marginTop: 50 }}>
        {" "}
        <p
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: "65px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#0c7aff",
            opacity: 1,
          }}
        >
          Charges Will Apply After you click Verify & Continue{" "}
        </p>{" "}
      </div>
      <BottomSheet open={open}>
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
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    spacing: 8,
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
