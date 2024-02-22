import styles from "./Body.module.css";
import { Link } from "react-router-dom";
import shake1 from "../image/쉐이크 1.png";
import shake2 from "../image/쉐이크 2.png";

function Body() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.slogan}>
          <div className={styles.slogan__big}>
            ALWAYS BESIDE YOU{" "}
            <span className={styles.slogan__big__rear}>EDIYA COFFEE</span>
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
          <img src={shake2} alt="img" />
        </div>
        <div className={styles.shake__1}>
          <img src={shake1} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Body;
