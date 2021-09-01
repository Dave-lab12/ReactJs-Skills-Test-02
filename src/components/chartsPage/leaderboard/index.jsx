import React from "react";
import styles from "./leaderBoard.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import tableImg from "../../../assets/tableImg.png";

function LeaderBoard() {
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
          <tr>
            <td className={styles.textImg}>
              <img src={tableImg} className={styles.tableImg} alt="" />
              DaBaby
            </td>

            <td>$64,201,290</td>
            <td>
              <span className={styles.Numbers}>
                <AiOutlineArrowUp />
                23%
              </span>
            </td>
          </tr>
          <tr>
            <td className={styles.textImg}>
              <img src={tableImg} className={styles.tableImg} alt="" />
              chris Brown
            </td>

            <td>$64,201,290</td>
            <td>
              <span className={styles.Numbers}>
                <AiOutlineArrowUp />
                23%
              </span>
            </td>
          </tr>
          <tr>
            <td className={styles.textImg}>
              <img src={tableImg} className={styles.tableImg} alt="" />
              Kanye West
            </td>

            <td>$64,201,290</td>
            <td>
              <span className={styles.Numbers}>
                <AiOutlineArrowUp />
                23%
              </span>
            </td>
          </tr>
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
