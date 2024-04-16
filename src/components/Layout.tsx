import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import { LayoutProps } from "../interfaces/interface";

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      {children}
      <div className={styles.footer_wrap}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
