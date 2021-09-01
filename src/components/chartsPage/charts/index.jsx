import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./charts.module.css";

function Charts() {
  return (
    <section className={styles.chartsWrapper}>
      <header className={styles.title}>
        <h1>📈 charts</h1>
        <p>Music Industry</p>
        <span className={styles.Numbers}>
          <AiOutlineArrowUp />
          53%
        </span>
      </header>
      <section className={styles.category}>
        <div className={`${styles.card} ${styles.wider1}`}>
          <h1 className={`${styles.cardText} `}>Genres</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.cardText}>Labels</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.cardText}>groups</h1>
        </div>
        <div className={`${styles.card} ${styles.wider2}`}>
          <h1 className={styles.cardText}>artist</h1>
        </div>
      </section>
    </section>
  );
}

export default Charts;
