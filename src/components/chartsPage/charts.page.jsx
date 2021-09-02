import React from "react";
import Charts from "./charts";
import IndexSpotlight from "./indexSpotlight";
import MostFans from "./mostFans";
import data from "../../data.json";
import LeaderBoard from "./leaderboard";
function ChartsPage() {
  return (
    <div>
      <Charts data={data} />
      <IndexSpotlight data={data} />
      <LeaderBoard data={data} />
      <MostFans data={data} />
    </div>
  );
}

export default ChartsPage;
