import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NoticeData } from "../interfaces/interface";
import styles from "./Notice.module.css";

function Notice() {
  const [loading, setLoading] = useState<boolean>(true);
  const [noticeList, setNoticeList] = useState<NoticeData[]>([]);
  const [noticeIndex, setNoticeIndex] = useState(0);

  const parseNoticeJson = (json: NoticeData[]): NoticeData[] => {
    return json.map((notice: NoticeData) => ({
      index: notice.index,
      title: notice.title,
      content: notice.content,
      registrationDate: new Date(notice.registrationDate)
    }));
  };

  const getNoticeList = async () => {
    const json = await (
      await fetch(`https://homely-susi-hyeonqyu.koyeb.app/api/notice`)
    ).json();
    const parsedJson = parseNoticeJson(json);
    setNoticeList(parsedJson);
    setLoading(false);
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  const endIndex = noticeList.length - 1;
  const noticePrev = () => {
    if (noticeIndex > 0) setNoticeIndex(noticeIndex - 1);
  };
  const noticeNext = () => {
    if (noticeIndex < endIndex) setNoticeIndex(noticeIndex + 1);
  };

  const formatDate = (date: Date): string => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div>loading..</div>
      ) : (
        <div className={styles.noticeBox}>
          <div className={styles.control}>
            <Link to={"/notice"}>NOTICE</Link>
            <button
              className={styles.control__left}
              onClick={noticePrev}
              disabled={noticeIndex === 0}
            >
              <svg width="10" height="10" viewBox="0 0 10 10">
                <line
                  x1="6.5"
                  y1="2.875"
                  x2="3.5"
                  y2="5.625"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="6.5"
                  y1="7.875"
                  x2="3.5"
                  y2="5.125"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </button>
            <button
              className={styles.control__right}
              onClick={noticeNext}
              disabled={noticeIndex === endIndex}
            >
              <svg width="10" height="10" viewBox="0 0 10 10">
                <line
                  x1="3.5"
                  y1="2.875"
                  x2="6.5"
                  y2="5.625"
                  stroke="white"
                  strokeWidth="1"
                />
                <line
                  x1="3.5"
                  y1="7.875"
                  x2="6.5"
                  y2="5.125"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </button>
          </div>
          <div className={styles.contentWrap}>
            <Link to={"/notice"}>
              <h3>{noticeList && noticeList[noticeIndex].title}</h3>
              <p className={styles.date}>
                {noticeList &&
                  formatDate(noticeList[noticeIndex].registrationDate)}
              </p>
              <p className={styles.content}>
                {noticeList &&
                  (noticeList[noticeIndex].content.length > 45
                    ? `${noticeList[noticeIndex].content.slice(0, 45)}...`
                    : noticeList[noticeIndex].content)}
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notice;
