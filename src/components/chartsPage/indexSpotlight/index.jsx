import React, { useState } from "react";
import tableImg from "../../../assets/tableImg.png";
import styles from "./indexSpotlight.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
function IndexSpotlight({ data }) {
  const [indexData] = useState(data);
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
            {indexData.indexes.map((artist, index) => {
              const { name, category, AUM, growth } = artist;
              return (
                <tr key={index}>
                  <td className={styles.textImg}>
                    <img src={tableImg} className={styles.tableImg} alt="" />
                    <h1>{name}</h1>
                  </td>
                  <td>{category}</td>
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
