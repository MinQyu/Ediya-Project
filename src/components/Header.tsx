import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../image/logo.png"

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
            <div className={styles.menu}>
                <div className={styles.item}>이디야 디자인</div>
                <div className={styles.item}>로그인</div>
                <div className={styles.item}>회원가입</div>
                <div className={styles.item}><Link to="/drink">이디야 음료</Link></div>
                <div className={styles.item}><Link to="/news">이디야 뉴스</Link></div>
                <div className={styles.item}>매장찾기</div>
            </div>
        </div>
    );
}

export default Header;