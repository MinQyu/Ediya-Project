import Body from "../components/Body";
import Intro from "../components/Intro";
import Notice from "../components/Notice";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.banner}>
        <Body />
      </div>
      <div className={styles.promotion}>
        <div className={styles.promotionContainer}>
          <Intro />
          <Notice />
        </div>
      </div>
    </div>
  );
}

export default Home;
