import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { ResponseNoticeData, NoticeData } from "../interfaces/interface";
import { formatDate } from "../utils/dateUtil";
import styles from "./Notice.module.css";

function Notice() {
  const [noticeList, setNoticeList] = useState<NoticeData[]>();
  const [noticeIndex, setNoticeIndex] = useState(0);

  const parseNoticeJson = (json: ResponseNoticeData[]): NoticeData[] => {
    return json.map((notice) => ({
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
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  const goPrev = useCallback(() => {
    if (noticeIndex > 0) setNoticeIndex((noticeIndex) => noticeIndex - 1);
  }, [noticeIndex]);

  const endIndex = noticeList ? noticeList.length - 1 : 0;

  const goNext = useCallback(() => {
    if (noticeIndex < endIndex)
      setNoticeIndex((noticeIndex) => noticeIndex + 1);
  }, [noticeIndex, endIndex]);

  return (
    <div className={styles.notice_area}>
      {noticeList ? (
        <div className={styles.notice_box}>
          <div className={styles.control}>
            <Link to={"/notice"}>NOTICE</Link>
            <button
              className={styles.control__left}
              onClick={goPrev}
              disabled={noticeIndex === 0}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/arrow_left.svg)`
              }}
            ></button>
            <button
              className={styles.control__right}
              onClick={goNext}
              disabled={noticeIndex === endIndex}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/arrow_right.svg)`
              }}
            ></button>
          </div>
          <div className={styles.content_box}>
            <Link to={"/notice"}>
              <h3>{noticeList[noticeIndex].title}</h3>
              <p className={styles.date}>
                {formatDate(noticeList[noticeIndex].registrationDate)}
              </p>
              <p className={styles.content}>
                {noticeList[noticeIndex].content}
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <div>loading..</div>
      )}
    </div>
  );
}

export default Notice;
