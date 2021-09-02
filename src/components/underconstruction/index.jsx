import React from "react";
import styles from "./construction.module.css";
import img from "../../assets/construction.svg";
function Construction() {
  return (
    <main className={styles.wrapper}>
      <h1>Site Under Construction </h1>
      <img src={img} alt="" />
    </main>
  );
}

export default Construction;
