import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const logoSrc = "/assets/logo.png";
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={process.env.PUBLIC_URL + logoSrc} alt="logo" />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles.item}>이디야 디자인</li>
        <li className={styles.item}>로그인</li>
        <li className={styles.item}>회원가입</li>
        <li className={styles.item}>
          <Link to="/drink">이디야 음료</Link>
        </li>
        <li className={styles.item}>
          <Link to="/news">이디야 뉴스</Link>
        </li>
        <li className={styles.item}>매장찾기</li>
      </ul>
    </header>
  );
}

export default Header;
