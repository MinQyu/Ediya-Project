import { useState } from "react";
import DrinkDetail from "./DrinkDetail";
import { DDrink } from "../interfaces/DrinkInterface";
import styles from "./DrinkList.module.css";

function DrinkList({ sn, title, imgSrc }: DDrink) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleEscape = (event: any) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  return (
    <div
      className={styles.drink}
      onClick={openModal}
      onKeyDown={handleEscape}
      tabIndex={0}
    >
      <img src={imgSrc} alt={title} />
      <p>{title}</p>
      {isModalOpen && <DrinkDetail sn={sn} onClose={closeModal} />}
    </div>
  );
}

export default DrinkList;
