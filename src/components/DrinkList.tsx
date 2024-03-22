import { useState, useRef } from "react";
import DrinkDetail from "./DrinkDetail";
import { DDrink } from "../interfaces/DrinkInterface";
import styles from "./DrinkList.module.css";

function DrinkList({ sn, title, imgSrc }: DDrink) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.drink} onClick={openModal}>
        <img src={imgSrc} alt={title} />
        <p>{title}</p>
      </div>
      {isModalOpen && <DrinkDetail sn={sn} onClose={closeModal} />}
    </>
  );
}

export default DrinkList;
