import { useState, useEffect } from "react";
import { DrinkType } from "../interfaces/DrinkInterface";
import styles from "./DrinkItem.module.css";

function DrinkItem({ sn, title, imgSrc }: DrinkType) {
  return (
    <div className={styles.drink}>
      <img src={imgSrc} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default DrinkItem;
