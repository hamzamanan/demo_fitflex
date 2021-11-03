import { React } from "react";
import { Route, Switch } from "react-router-dom";
import GetNumber from "./GetNumber";
import DownloadLink from "./DownloadLink";
import LandingPage from "./LandingPage";
import Otp from "./Otp";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/otp" component={Otp} />
        <Route path="/getnumber" component={GetNumber} />
        <Route path="/downloadlink" component={DownloadLink} />
      </Switch>

      {/* <About />
      <Contact /> */}
    </>
  );
};
export default App;
