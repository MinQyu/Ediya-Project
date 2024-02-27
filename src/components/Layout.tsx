import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import { LayoutProps } from "../interfaces/interface";

function Layout({ children }: LayoutProps) {
  const goToTop = () => {
    window.scrollTo({
      top: 0
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      {children}
      <button className={styles.go_to_top_btn} onClick={goToTop}>
        <img src={process.env.PUBLIC_URL + "/assets/GoToTop.svg"} />
      </button>
      <div className={styles.footer_wrap}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
