import React from "react";
import tableImg from "../../../assets/tableImg.png";
import styles from "./indexSpotlight.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
function IndexSpotlight() {
  return (
    <section className={styles.spotlight}>
      <h1>Index Spotlight</h1>
      <p>
        Invest in music market indexes to get exposure to sectors with artist
        prices determining the price of index
      </p>
      <div className={styles.tes}>
        <table>
          <thead>
            <tr className={styles.tableHeader}>
              <th></th>
              <th>Category</th>
              <th>AUM</th>
              <th>Daily</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.textImg}>
                <img src={tableImg} className={styles.tableImg} alt="" />
                Hip Hop index
              </td>
              <td>Genre</td>
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
                Hip Hop index
              </td>
              <td>Genre</td>
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
                Hip Hop index
              </td>
              <td>Genre</td>
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
      </div>
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

export default IndexSpotlight;
