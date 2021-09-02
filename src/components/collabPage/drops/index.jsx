import React, { useState } from "react";
import styles from "./drops.module.css";
import underlineImage from "../../../assets/underlined.png";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ArtistComponent from "./drops.component";

function Drops({ data }) {
  const [dropsArtist] = useState(data);
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
        {dropsArtist.drops.map((artist) => {
          const { id, name, marketCap, price, fav } = artist;
          return (
            <ArtistComponent
              id={id}
              name={name}
              marketCap={marketCap}
              price={price}
              fav={fav}
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

export default Drops;
