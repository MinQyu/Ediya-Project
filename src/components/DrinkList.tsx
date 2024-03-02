import { useState, useEffect } from "react";
import { DDrink } from "../interfaces/DrinkInterface";
import styles from "./DrinkList.module.css";

function DrinkList({ sn, title, imgSrc }: DDrink) {
  return (
    <div className={styles.drink}>
      <img src={imgSrc} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default DrinkList;
