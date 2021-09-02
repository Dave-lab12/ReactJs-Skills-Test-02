import React, { useState } from "react";
import MostFansComponent from "./mostFans.component";
import styles from "./mostFans.module.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function MostFans({ data }) {
  const [mostFansData] = useState(data);
  return (
    <section className={styles.mostFans}>
      <div className={styles.title}>
        <h1>Most Fans</h1>
        <div className={styles.otherContent}>
          <p>Category</p>
          <p>This Week</p>
        </div>
      </div>
      <div className={styles.container}>
        {mostFansData.mostFans.map((fans) => {
          const { id, name, records, AUM, category, holders, growth } = fans;
          return (
            <MostFansComponent
              id={id}
              name={name}
              records={records}
              AUM={AUM}
              category={category}
              holders={holders}
              growth={growth}
            />
          );
        })}
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

export default MostFans;
