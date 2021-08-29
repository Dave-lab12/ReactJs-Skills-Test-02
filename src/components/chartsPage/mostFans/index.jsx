import React from "react";
import styles from "./mostFans.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import tableImg from "../../../assets/tableImg.png";
function MostFans() {
  return (
    <section>
      <div className={styles.title}>
        <h1>Most Fans</h1>
        <div className={styles.otherContent}>
          <p>Category</p>
          <p>This Week</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.content}>
            <img src={tableImg} alt="" className={styles.tableImg} />
            <div className={styles.text}>
              <h1>Young thug</h1>
              <p>hiphop</p>
              <p>ysl records</p>
            </div>
          </div>
          <div className={styles.stats}>
            <p>
              <AiOutlineArrowUp />
              23%
            </p>
            <p>1,000,000 holders</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.content}>
            <img src={tableImg} alt="" className={styles.tableImg} />
            <div className={styles.text}>
              <h1>Young thug</h1>
              <p>hiphop</p>
              <p>ysl records</p>
            </div>
          </div>
          <div className={styles.stats}>
            <p>
              <AiOutlineArrowUp />
              23%
            </p>
            <p>1,000,000 holders</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.content}>
            <img src={tableImg} className={styles.tableImg} alt="" />
            <div className={styles.text}>
              <h1>Young thug</h1>
              <p>hiphop</p>
              <p>ysl records</p>
            </div>
          </div>
          <div className={styles.stats}>
            <p>
              <AiOutlineArrowUp />
              23%
            </p>
            <p>1,000,000 holders</p>
          </div>
        </div>
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
