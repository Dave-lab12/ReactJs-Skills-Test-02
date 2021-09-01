import { ProSidebar } from "react-pro-sidebar";
import { BrowserRouter, Switch, route, Route } from "react-router-dom";
import Charts from "./components/chartsPage/charts";
import IndexSpotlight from "./components/chartsPage/indexSpotlight";
import LeaderBoard from "./components/chartsPage/leaderboard";
import MostFans from "./components/chartsPage/mostFans";
import Collab from "./components/collabPage/collab";
import Exchange from "./components/collabPage/decentralizedExchange";
import Drops from "./components/collabPage/drops";
import SideBars from "./components/sidebar";

import "./styles.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <SideBars />
        <Switch>
          <Route path="/" />
        </Switch>
        <Charts />
        <IndexSpotlight />
        <LeaderBoard />
        <MostFans />
        {/*    <Collab />
      <Exchange />
    <Drops /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
