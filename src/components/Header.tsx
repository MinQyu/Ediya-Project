import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" onClick={() => handleLinkClick("/")}>
          <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>이디야 디자인</li>
        <li>로그인</li>
        <li>회원가입</li>
        <li className={`${activeLink === "/drink" ? styles.active : ""}`}>
          <Link to="/drink" onClick={() => handleLinkClick("/drink")}>
            이디야 음료
          </Link>
        </li>
        <li className={`${activeLink === "/news" ? styles.active : ""}`}>
          <Link to="/news" onClick={() => handleLinkClick("/news")}>
            이디야 뉴스
          </Link>
        </li>
        <li>매장찾기</li>
      </ul>
    </header>
  );
}

export default Header;
