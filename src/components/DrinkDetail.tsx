import { useState, useEffect, useRef } from "react";
import { ModalProps, DDrinkDetail } from "../interfaces/DrinkInterface";
import ModalCloseButton from "./svg_buttons/ModalCloseButton";
import styles from "./DrinkDetail.module.css";

function DrinkDetail({ sn, onClose }: ModalProps) {
  const [drinkDetail, setDrinkDetail] = useState<DDrinkDetail>();
  const modalRef = useRef<HTMLDivElement>(null);
  const modalOverlayClick = (event: any) => {
    if (modalRef.current === event.target) {
      onClose();
    }
  };
  const getDrinkDetail = async () => {
    const json = await (
      await fetch(
        `https://homely-susi-hyeonqyu.koyeb.app/api/drink/detail?sn=${sn}`
      )
    ).json();
    setDrinkDetail(json.detail);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    getDrinkDetail();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={styles.modal_overlay}
      ref={modalRef}
      onClick={modalOverlayClick}
    >
      {drinkDetail && (
        <div className={styles.modal}>
          <ModalCloseButton onClick={onClose} />
          <div className={styles.header}>
            <h3>{drinkDetail.title}</h3>
            <h4>{drinkDetail.englishTitle}</h4>
          </div>
          <div className={styles.content}>
            <p>{drinkDetail.description}</p>
          </div>
          <div className={styles.footer_box}>
            <table>
              <tbody>
                <tr>
                  <td>칼로리</td>
                  <td>{`(${drinkDetail.calorie}kcal)`}</td>
                </tr>
                <tr>
                  <td>당류</td>
                  <td>{`(${drinkDetail.sugars}g)`}</td>
                </tr>
                <tr>
                  <td>단백질</td>
                  <td>{`(${drinkDetail.protein}g)`}</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.vertical_line} />
            <table>
              <tbody>
                <tr>
                  <td>포화지방</td>
                  <td>{`(${drinkDetail.saturatedFat}g)`}</td>
                </tr>
                <tr>
                  <td>나트륨</td>
                  <td>{`(${drinkDetail.natrium}mg)`}</td>
                </tr>
                <tr>
                  <td>카페인</td>
                  <td>{`(${drinkDetail.caffeine}mg)`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default DrinkDetail;
