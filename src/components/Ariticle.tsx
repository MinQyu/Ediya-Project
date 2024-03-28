import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ResponseArticles,
  Articles,
  Paging,
  ArticleData
} from "../interfaces/interface";
import { formatDate } from "../utils/dateUtil";
import styles from "./Article.module.css";

function Article() {
  const [loading, setLoading] = useState<boolean>(true);
  const [articleData, setArticleData] = useState<ArticleData>();
  const parseArticleJson = (json: {
    articles: ResponseArticles[];
    paging: Paging;
  }): ArticleData => {
    const articles: Articles[] = json.articles.map(
      (article: ResponseArticles) => ({
        ...article,
        registrationDate: new Date(article.registrationDate)
      })
    );
    const paging: Paging = {
      ...json.paging
    };
    return { articles, paging };
  };
  const makeRequest = (
    keyword: string,
    keywordType: string,
    currentPage: number
  ) => {
    return new URLSearchParams({
      keyword: keyword,
      keywordType: keywordType,
      currentPage: currentPage.toString()
    }).toString();
  };
  const getArticleData = async () => {
    const request = makeRequest("", "", 24);
    const json = await (
      await fetch(
        `https://homely-susi-hyeonqyu.koyeb.app/api/article/articles?${request}`
      )
    ).json();
    const parsedJson = parseArticleJson(json);
    setArticleData(parsedJson);
    setLoading(false);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <div className={styles.article_area}>
      {loading ? (
        <div>loading..</div>
      ) : (
        <div className={styles.article_box}>
          <Link to={"/news"}>
            <img src={process.env.PUBLIC_URL + "/assets/+.svg"}></img>
          </Link>
          <h3>NEWS</h3>
          <div className={styles.article_content_wrap}>
            {articleData &&
              articleData.articles.slice(-2).map((article) => {
                return (
                  <div className={styles.article_content}>
                    <p className={styles.article_content__title}>
                      {article.title}
                    </p>
                    <p className={styles.article_content__date}>
                      {formatDate(article.registrationDate)}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
