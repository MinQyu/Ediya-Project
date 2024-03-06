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
  const headlineContent = () => {
    switch (selectedItem) {
      case "공지사항":
        return "";
      case "언론 속 이디야":
        return "이디야의 소식을 전해드립니다";
      case "홍보영상":
        return "";
      case "수상내역":
        return "이디야의 영광스런 수상내역입니다";
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
      <div className={styles.headline}>
        <h3>
          <span>\</span>
          {selectedItem}
        </h3>
        <p>{headlineContent()}</p>
      </div>
      <div className={styles.news_list_wrap}>뉴스리스트 컴포넌트</div>
    </div>
  );
}

export default News;
