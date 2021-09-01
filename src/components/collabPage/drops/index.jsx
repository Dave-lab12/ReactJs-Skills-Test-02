import React from "react";
import styles from "./drops.module.css";
import underlineImage from "../../../assets/underlined.png";
import tableImg from "../../../assets/tableImg.png";
import { AiOutlineStar } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function Drops() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}> ️‍🔥 drops</h1>
      <img src={underlineImage} width="100%" alt="" />
      <p>
        The drops you missed. Its OK you can swap for your favorite artists on
        MUSIswap
      </p>
      <div className={styles.theDropsContainer}>
        <div className={styles.theDropsTitle}>
          <h1>📦 the drops</h1>
          <p>Active</p>
          <p>Upcoming</p>
          <p>Ended</p>
        </div>
        <div className={styles.theDropCard}>
          <div className={styles.user}>
            <img src={tableImg} alt="" />
            <div className={styles.artistName}>
              <h1>50 Cent</h1>
              <p>
                <b>$50,500,000</b> market cap
              </p>
            </div>
          </div>
          <div className={styles.stats}>
            <h6>price</h6>
            <p>$.50</p>
            <button>Buy</button>
          </div>
        </div>
        <div className={styles.theDropCard}>
          <div className={styles.user}>
            <img src={tableImg} alt="" />
            <div className={styles.artistName}>
              <h1>50 Cent</h1>
              <p>
                <b>$50,500,000</b> market cap
              </p>
            </div>
          </div>
          <div className={styles.stats}>
            <h6>price</h6>
            <p>$.50</p>
            <button>Buy</button>
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

export default Drops;
