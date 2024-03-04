import { useState } from "react";
import { NavigationBarProps } from "../interfaces/NewsInterface";
import styles from "./NavigationBar.module.css";

function NavigationBar({ selectedItem, setSelectedItem }: NavigationBarProps) {
  const handleItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const item = event.currentTarget.innerText;
    setSelectedItem(item);
    console.log(selectedItem);
  };

  return (
    <ul className={styles.container}>
      <li
        className={selectedItem === "공지사항" ? styles.selected : ""}
        onClick={handleItemClick}
      >
        공지사항
      </li>
      <li
        className={selectedItem === "언론 속 이디야" ? styles.selected : ""}
        onClick={handleItemClick}
      >
        언론 속 이디야
      </li>
      <li
        className={selectedItem === "홍보영상" ? styles.selected : ""}
        onClick={handleItemClick}
      >
        홍보영상
      </li>
      <li
        className={selectedItem === "수상내역" ? styles.selected : ""}
        onClick={handleItemClick}
      >
        수상내역
      </li>
    </ul>
  );
}

export default NavigationBar;
