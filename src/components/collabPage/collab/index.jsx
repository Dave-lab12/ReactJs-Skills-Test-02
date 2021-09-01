import React from "react";
import collabImg from "../../../assets/rappers.jpg";
import tableImg from "../../../assets/tableImg.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import styles from "./collab.module.css";
function Collab() {
  return (
    <section className={styles.collabWrapper}>
      <header className={styles.title}>
        <h1>🎤 collab mining</h1>
        <div className={styles.headerImage}></div>
      </header>
      <article>
        <p>
          Your favorite artist can support up and coming artists into the market
          by rewarding you to participate in their collaboration
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
        <div className={styles.poolsTableContainer}>
          <div className={styles.poolsTable}>
            <div className={styles.imageStack}>
              <div className={styles.imageBack}>
                <img src={tableImg} className={styles.artistImgF} alt="" />
              </div>
              <div className={styles.imageFront}>
                <img src={tableImg} className={styles.artistImgB} alt="" />
              </div>
            </div>
            <div className={styles.poolsData}>
              <h1>Travis scott/A$ap Rocky</h1>
              <p>
                your own
                <AiOutlineMinus
                  className={`${styles.poolDataIcon} ${styles.minus}`}
                />
                <AiOutlinePlus
                  className={`${styles.poolDataIcon} ${styles.plus}`}
                />
              </p>
              <p>
                {" "}
                <span className={styles.poolsDataOwn}>$100,000 </span>of
                $24,000,000
              </p>
            </div>
          </div>
          <div className={styles.poolsDaily}>
            <p>Daily</p>
            <p className={styles.poolsDailyNumber}>7%</p>
          </div>
        </div>
        <div className={styles.collabPools}>
          <div className={styles.collabTitle}>
            <h1>Collab Pools</h1>
            <div className={styles.collabNestedTitle}>
              <p>category</p>
              <p>Staked</p>
            </div>
          </div>
          <div className={styles.poolsTableContainer}>
            <div className={styles.poolsTable}>
              <div className={styles.imageStack}>
                <div className={styles.imageBack}>
                  <img src={tableImg} className={styles.artistImgF} alt="" />
                </div>
                <div className={styles.imageFront}>
                  <img src={tableImg} className={styles.artistImgB} alt="" />
                </div>
              </div>
              <div className={styles.poolsData}>
                <h1>Travis scott/Asap Rocky</h1>
                <p>
                  your own
                  <AiOutlineMinus
                    className={`${styles.poolDataIcon} ${styles.minus}`}
                  />
                  <AiOutlinePlus
                    className={`${styles.poolDataIcon} ${styles.plus}`}
                  />
                </p>

                <div className={styles.poolsDataCollab}>
                  <span>TVL $24,000,000 </span>
                  <button className={styles.poolsDataButton}>Collab</button>
                </div>
              </div>
            </div>
            <div className={styles.poolsDaily}>
              <p>Daily</p>
              <p className={styles.poolsDailyNumber}>7%</p>
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
    </section>
  );
}

export default Collab;
