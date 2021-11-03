import React from "react";
import pic from "./LandingImg.jpg";
import GradientButton from "react-linear-gradient-button";

const LandingPage = () => {
  function handleClick() {
    // toast("Wow so easy!");
    document.location.href = "GetNumber";
  }
  //   toast.success("You have subscribed");
  return (
    <div style={container}>
      <div>
        <h1
          style={{
            color: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
            textShadow: "1px 1px #000",
            // padding: "60px",
            // paddingTop: "10%",
            color: "#fff",
            fontSize: "75px",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          FITFLEX
        </h1>
      </div>
      <div style={{ marginTop: 150 }}>
        <p style={signintext}>
          Rp. 100/week, Subscribe to gain access to premium workout tutorials.
        </p>
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
          Subscribe
        </GradientButton>
      </div>
    </div>
  );
};
const container = {
    backgroundImage: `url(${pic})`,
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
  signintext = {
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "1px 1px #000",
    // padding: "60px",
    // paddingTop: "10%",
    color: "#fff",
    fontSize: "35px",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  };
export default LandingPage;
