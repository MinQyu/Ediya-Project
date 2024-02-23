import Header from "./Header";
import styles from "./Layout.module.css";
import { LayoutProps } from "../interfaces/interface";

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      {children}
    </div>
  );
}

export default Layout;
