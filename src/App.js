import { React } from "react";
import { Route, Switch } from "react-router-dom";
import GetNumber from "./GetNumber";
import DownloadLink from "./DownloadLink";
import Otp from "./Otp";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={GetNumber} />
        <Route path="/otp" component={Otp} />
        <Route path="/downloadlink" component={DownloadLink} />
      </Switch>

      {/* <About />
      <Contact /> */}
    </>
  );
};
export default App;
