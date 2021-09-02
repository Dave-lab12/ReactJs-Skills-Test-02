import { Switch, BrowserRouter, Route } from "react-router-dom";
import ChartsPage from "./components/chartsPage/charts.page";
import CollabPage from "./components/collabPage/collab.page";

import SideBars from "./components/sidebar";
import Construction from "./components/underconstruction";

import "./styles.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <SideBars />
        <Switch>
          <Route exact path="/" component={ChartsPage} />
          <Route exact path="/swap" component={CollabPage} />
          <Route exact path="*" component={Construction} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
