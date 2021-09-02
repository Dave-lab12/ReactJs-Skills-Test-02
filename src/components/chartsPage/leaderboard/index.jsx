import React, { useState } from "react";

import styles from "./leaderBoard.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function LeaderBoard({ data }) {
  const [leaderBoardData] = useState(data);
  return (
    <section className={styles.leaderBoardWrapper}>
      <h1 className={styles.title}>Leaderboard</h1>
      <div className={styles.leaderBoardCategory}>
        <p>Genres</p>
        <p>Labels</p>
        <p>Artist</p>
        <p>Collections</p>
      </div>

      <table>
        <thead>
          <tr className={styles.tableHeader}>
            <th>Name</th>
            <th>AUM</th>
            <th>Daily</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoardData.leaderBoard.map((artist, index) => {
            const { id, name, AUM, growth } = artist;
            const img = require(`../../../assets/${id}.png`);
            return (
              <tr key={index}>
                <td className={styles.textImg}>
                  <img src={img.default} className={styles.tableImg} alt="" />
                  <h1>{name}</h1>
                </td>

                <td>${AUM}</td>
                <td>
                  <span className={styles.Numbers}>
                    <AiOutlineArrowUp />
                    {growth}%
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.arrowContainer}>
        <div className={styles.arrowLeft}>
          <RiArrowLeftSLine />
        </div>
        <div className={styles.arrowRight}>
          <RiArrowRightSLine />
        </div>
      </div>
    </section>
  );
}

export default LeaderBoard;
