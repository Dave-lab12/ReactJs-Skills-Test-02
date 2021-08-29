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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        sapiente saepe cumque molestias natus dolor, porro sunt? Voluptas,
        voluptatibus similique.
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
                <AiOutlineArrowUp />
                23%
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
                <AiOutlineArrowUp />
                23%
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
                <AiOutlineArrowUp />
                23%
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
