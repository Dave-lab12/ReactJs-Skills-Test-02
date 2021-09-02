import React from "react";
import styles from "./drops.module.css";
import { AiOutlineStar } from "react-icons/ai";

function ArtistComponent({ name, id, marketCap, price, fav }) {
  const image = require(`../../../assets/${id}.png`);

  return (
    <div key={id} className={styles.theDropCard}>
      <div className={styles.user}>
        <div className={styles.imageContainer}>
          <AiOutlineStar className={fav && styles.fav} />
          <img src={image.default} alt="" />
        </div>
        <div className={styles.artistName}>
          <h1>{name}</h1>
          <p>
            <b>${marketCap}</b> market cap
          </p>
        </div>
      </div>
      <div className={styles.stats}>
        <h6>price</h6>
        <p>${price}</p>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default ArtistComponent;
