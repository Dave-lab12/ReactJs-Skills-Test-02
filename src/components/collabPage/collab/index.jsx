import React from "react";
import collabImg from "../../../assets/rappers.jpg";
import styles from "./collab.module.css";
function Collab() {
  return (
    <section>
      <header className={styles.title}>
        🎤 collab mining
        <div className={styles.headerImage}></div>
      </header>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio
          vel corporis voluptatibus esse fuga libero fugiat! Iusto, fuga omnis.
        </p>
      </article>
      <section className={styles.poolsContainer}>
        <div className={styles.collabTitle}>
          <h1>My Pools</h1>
          <div className={styles.collabNestedTitle}>
            <p>category</p>
            <p>Staked</p>
          </div>
        </div>
        <p className={styles.poolsNotification}>No active pools</p>
      </section>
    </section>
  );
}

export default Collab;
