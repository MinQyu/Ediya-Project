import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentTemplate from "../components/ContentTemplate";
import Announcements from "../components/Announcements";
import Media from "../components/Media";
import PromotionalVideo from "../components/PromotionalVideo";
import Awards from "../components/Awards";
import { ContentMap } from "../interfaces/interface";
import styles from "./News.module.css";

function News() {
  const contentMap: ContentMap = {
    "공지사항": {
      headline: "미구현",
      component: <Announcements />
    },
    "언론 속 이디야": {
      headline: "이디야의 소식을 전해드립니다",
      component: <Media />
    },
    "홍보영상": {
      headline: "미구현",
      component: <PromotionalVideo />
    },
    "수상내역": {
      headline: "이디야의 영광스런 수상내역입니다",
      component: <Awards />
    }
  };
  const items = Object.keys(contentMap);
  const [selectedItem, setSelectedItem] = useState<string>(items[0]);
  const { component, headline } = contentMap[selectedItem];

  return (
    <div className={styles.container}>
      <div className={styles.navigation_wrap}>
        <NavigationBar
          items={items}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <ContentTemplate
        contentName={selectedItem}
        contentHeadline={headline}
        contentComponent={component}
      />
    </div>
  );
}

export default News;
