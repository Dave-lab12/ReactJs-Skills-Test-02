import React from "react";
import styles from "./exchange.module.css";
import { FiArrowDown } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";
function Exchange() {
  return (
    <section className={styles.exchangeWrapper}>
      <div className={styles.title}>
        <h1>Decentralized Exchange</h1>
      </div>
      <div className={styles.exchangeContainer}>
        <div className={styles.containerButton}>
          <button className={`${styles.exchangeButtons} ${styles.buttonSwap}`}>
            swap
          </button>
          <button
            className={`${styles.exchangeButtons} ${styles.buttonLiquidity}`}
          >
            liquidity
          </button>
        </div>
        <div className={styles.inputContainer}>
          <input type="text" />

          <select className={styles.inputSelect}>
            <option>usd</option>
          </select>
        </div>
        <FiArrowDown className={styles.exchangeArrowDown} />
        <div className={styles.inputContainer}>
          <input type="text" />
          <select className={styles.inputSelectSecond}>
            <option>Select a token</option>
          </select>
        </div>
        <button className={styles.exchangeButton}>Switch to USDC</button>
      </div>
    </section>
  );
}

export default Exchange;
