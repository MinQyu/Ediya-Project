import styles from "./Body.module.css";
import { Link } from "react-router-dom";

function Body() {
  const shake1Src = "/assets/쉐이크 1.png";
  const shake2Src = "/assets/쉐이크 2.png";
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.slogan}>
          <div className={styles.slogan__big}>
            ALWAYS BESIDE YOU <span>EDIYA COFFEE</span>
          </div>
          <hr className={styles.line} />
          <div className={styles.slogan__small}>
            늘 당신 곁에, 이디야 커피의 새로운 메뉴를 맛보세요.
          </div>
        </div>
        <button className={styles.btn}>
          <Link to="/drink" className={styles.btn__text}>
            메뉴 보기
          </Link>
        </button>
        <div className={styles.shake__2}>
          <img src={process.env.PUBLIC_URL + shake2Src} alt="img" />
        </div>
        <div className={styles.shake__1}>
          <img src={process.env.PUBLIC_URL + shake1Src} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Body;
