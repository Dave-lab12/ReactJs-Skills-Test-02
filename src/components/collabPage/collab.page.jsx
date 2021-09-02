import React from "react";
import Collab from "./collab";
import Exchange from "./decentralizedExchange";
import Drops from "./drops";
import data from "../../data.json";

function CollabPage() {
  return (
    <div>
      <Collab data={data} />
      <Exchange data={data} />
      <Drops data={data} />
    </div>
  );
}

export default CollabPage;
