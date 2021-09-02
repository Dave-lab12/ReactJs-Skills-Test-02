import React from "react";
import { Link } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import { RiYoutubeFill } from "react-icons/ri";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import styles from "./sidebar.module.css";
import musiSwap from "../../assets/MusiSwap.svg";
import { navItems } from "./navigationItems";

function SideBars() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.topContainer}>
        <h1 className={styles.title}>
          <img src={musiSwap} alt="" />
        </h1>
        <div className={styles.listContainer}>
          {navItems.map((data, index) => {
            const { name, link } = data;
            const i = require(`../../assets/${name}.png`);
            return (
              <Link key={index} to={link}>
                <div className={styles.listTitle}>
                  <img src={i.default} alt="" />
                  <h1>{name}</h1>
                </div>
              </Link>
            );
          })}
        </div>
        <button className={styles.connectButton}>connect wallet</button>
      </div>
      <div className={styles.socialMedia}>
        <Link to={{ pathname: "https://github.com/" }} target="_blank">
          <VscGithub className={`${styles.socialIcons} ${styles.github}`} />
        </Link>
        <Link to={{ pathname: "https://youtube.com/" }} target="_blank">
          <RiYoutubeFill
            className={`${styles.socialIcons} ${styles.youtube}`}
          />
        </Link>
        <Link to={{ pathname: "https://telegram.org/" }} target="_blank">
          <FaTelegramPlane
            className={`${styles.socialIcons} ${styles.telegram}`}
          />
        </Link>
        <Link to={{ pathname: "https://linkedin.com/" }} target="_blank">
          <AiFillLinkedin
            className={`${styles.socialIcons} ${styles.linkedin}`}
          />
        </Link>
        <Link to={{ pathname: "https://twitter.com/" }} target="_blank">
          <AiOutlineTwitter
            className={`${styles.socialIcons} ${styles.twitter}`}
          />
        </Link>
        <Link to={{ pathname: "https://discord.com/" }} target="_blank">
          <FaDiscord className={`${styles.socialIcons} ${styles.discord}`} />
        </Link>
      </div>
    </section>
  );
}

export default SideBars;
