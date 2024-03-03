import { useState, useEffect } from "react";
import styles from "./DrinkDetail.module.css";
import { ModalProps, DDrinkDetail } from "../interfaces/DrinkInterface";

function DrinkDetail({ sn, onClose }: ModalProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [drinkDetail, setDrinkDetail] = useState<DDrinkDetail>();
  const getDrinkDetail = async () => {
    const json = await (
      await fetch(
        `https://homely-susi-hyeonqyu.koyeb.app/api/drink/detail?sn=${sn}`
      )
    ).json();
    setDrinkDetail(json.detail);
    setLoading(false);
  };

  useEffect(() => {
    getDrinkDetail();
  }, []);
  const handleClose = (event: any) => {
    onClose();
  };

  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
      {loading ? (
        <div></div>
      ) : (
        <div className={styles.modal}>
          <button onClick={handleClose}>
            <img src={process.env.PUBLIC_URL + "/assets/Black.svg"}></img>
          </button>
          <div className={styles.header}>
            <h3>{drinkDetail && drinkDetail.title}</h3>
            <h4>{drinkDetail && drinkDetail.englishTitle}</h4>
          </div>
          <div className={styles.content}>
            <p>{drinkDetail && drinkDetail.description}</p>
          </div>
          <div className={styles.footer_box}>
            <table>
              <tr>
                <td>칼로리</td>
                <td>{drinkDetail && `(${drinkDetail.calorie}kcal)`}</td>
              </tr>
              <tr>
                <td>당류</td>
                <td>{drinkDetail && `(${drinkDetail.sugars}g)`}</td>
              </tr>
              <tr>
                <td>단백질</td>
                <td>{drinkDetail && `(${drinkDetail.protein}g)`}</td>
              </tr>
            </table>
            <div className={styles.vertical_line} />
            <table>
              <tr>
                <td>포화지방</td>
                <td>{drinkDetail && `(${drinkDetail.saturatedFat}g)`}</td>
              </tr>
              <tr>
                <td>나트륨</td>
                <td>{drinkDetail && `(${drinkDetail.natrium}mg)`}</td>
              </tr>
              <tr>
                <td>카페인</td>
                <td>{drinkDetail && `(${drinkDetail.caffeine}mg)`}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default DrinkDetail;
