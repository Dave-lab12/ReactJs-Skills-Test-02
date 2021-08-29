import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./charts.module.css";

function Charts() {
  return (
    <>
      <header className={styles.title}>
        <h1> 📈charts</h1>
        <p>Music Industry</p>
        <span>
          <AiOutlineArrowUp />
          53%
        </span>
      </header>
      <section className={styles.category}>
        <div className={styles.card}>
          <h1 className={styles.cardText}>Genres</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.cardText}>Labels</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.cardText}>groups</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.cardText}>artist</h1>
        </div>
      </section>
    </>
  );
}

export default Charts;
