import { useState } from "react";
import { NavigationBarProps } from "../interfaces/interface";
import styles from "./NavigationBar.module.css";

function NavigationBar({
  items,
  selectedItem,
  setSelectedItem
}: NavigationBarProps) {
  const handleItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const clickedItem = event.currentTarget.innerText;
    setSelectedItem(clickedItem);
    console.log(selectedItem);
  };

  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <li
          className={selectedItem === item ? styles.selected : ""}
          onClick={handleItemClick}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default NavigationBar;
