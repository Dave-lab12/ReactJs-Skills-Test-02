import React from "react";
import styles from "./mostFans.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";

function MostFansComponent({
  id,
  name,
  records,
  AUM,
  category,
  holders,
  growth,
}) {
  const img = require(`../../../assets/${id}.png`);
  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <img src={img.default} alt="" className={styles.tableImg} />
        <div className={styles.text}>
          <h1>{name}</h1>
          <p>{category}</p>
          <p>{records}</p>
        </div>
      </div>
      <div className={styles.stats}>
        <span className={styles.Numbers}>
          <AiOutlineArrowUp />
          {growth}%
        </span>
        <p>${AUM}</p>
        <p>{holders} holders</p>
      </div>
    </div>
  );
}

export default MostFansComponent;
