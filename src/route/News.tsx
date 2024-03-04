import styles from "./News.module.css";

function News() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation_wrap}>네비 컴포넌트</div>
      <div className={styles.headline}>헤드라인</div>
      <div className={styles.news_list_wrap}>뉴스리스트 컴포넌트</div>
    </div>
  );
}

export default News;
