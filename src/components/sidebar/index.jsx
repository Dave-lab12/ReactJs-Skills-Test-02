import React from "react";
import { VscGithub } from "react-icons/vsc";
import { RiYoutubeFill } from "react-icons/ri";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import styles from "./sidebar.module.css";
import musiSwap from "../../assets/MusiSwap.svg";
import chartsImg from "../../assets/charts.png";
import swapImg from "../../assets/swap.png";
import collabImg from "../../assets/collab.png";
import dropsImg from "../../assets/drops.png";
import collections from "../../assets/collection1.png";
import giveaways from "../../assets/giveAways.png";
function SideBars() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.topContainer}>
        <h1 className={styles.title}>
          <img src={musiSwap} alt="" />
        </h1>
        <div className={styles.listContainer}>
          <div className={styles.listTitle}>
            <img src={chartsImg} alt="" />
            <h1>Charts</h1>
          </div>
          <div className={styles.listTitle}>
            <img src={swapImg} alt="" />
            <h1>swap</h1>
          </div>
          <div className={styles.listTitle}>
            <img src={collabImg} alt="" />
            <h1>collab</h1>
          </div>
          <div className={styles.listTitle}>
            <img src={dropsImg} alt="" />
            <h1>drops</h1>
          </div>
          <div className={styles.listTitle}>
            <img src={collections} alt="" />
            <h1>collections</h1>
          </div>
          <div className={styles.listTitle}>
            <img src={giveaways} alt="" />
            <h1>giveaways</h1>
          </div>
        </div>
        <button className={styles.connectButton}>connect wallet</button>
      </div>
      <div className={styles.socialMedia}>
        <VscGithub className={`${styles.socialIcons} ${styles.github}`} />
        <RiYoutubeFill className={`${styles.socialIcons} ${styles.youtube}`} />
        <FaTelegramPlane
          className={`${styles.socialIcons} ${styles.telegram}`}
        />
        <AiFillLinkedin
          className={`${styles.socialIcons} ${styles.linkedin}`}
        />
        <AiOutlineTwitter
          className={`${styles.socialIcons} ${styles.twitter}`}
        />
        <FaDiscord className={`${styles.socialIcons} ${styles.discord}`} />
      </div>
    </section>
  );
}

export default SideBars;
