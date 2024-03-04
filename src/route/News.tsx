import { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import styles from "./News.module.css";

function News() {
  const [selectedItem, setSelectedItem] = useState<string>("공지사항");
  const renderContent = () => {
    switch (selectedItem) {
      case "공지사항":
        return <div></div>;
      case "언론 속 이디야":
        return <div></div>;
      case "홍보영상":
        return <div></div>;
      case "수상내역":
        return <div></div>;
      default:
        return null;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.navigation_wrap}>
        <NavigationBar
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <div className={styles.headline}>헤드라인</div>
      <div className={styles.news_list_wrap}>뉴스리스트 컴포넌트</div>
    </div>
  );
}

export default News;
