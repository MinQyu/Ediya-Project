import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Articles, Paging, ArticleData } from "../interfaces/interface";
import styles from "./Article.module.css";

function Article() {
  const [loading, setLoading] = useState<boolean>(true);
  const [articleList, setArticleList] = useState<ArticleData>();
  const parseArticleJson = (json: ArticleData): ArticleData => {
    const articles: Articles[] = json.articles.map((article: Articles) => ({
      sn: article.sn,
      imgSrc: article.imgSrc,
      title: article.title,
      content: article.content,
      registrationDate: new Date(article.registrationDate)
    }));
    const paging: Paging = {
      currentPage: json.paging.currentPage,
      lastPage: json.paging.lastPage,
      blockSize: json.paging.blockSize
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
  const getArticleList = async () => {
    const request = makeRequest("", "", 24);
    const json = await (
      await fetch(
        `https://homely-susi-hyeonqyu.koyeb.app/api/article/articles?${request}`
      )
    ).json();
    const parsedJson = parseArticleJson(json);
    console.log(json);
    setArticleList(parsedJson);
    setLoading(false);
  };
  const formatDate = (date: Date): string => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  useEffect(() => {
    getArticleList();
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
            <div className={styles.article_content_upper}>
              <p className={styles.article_content__title}>
                {articleList &&
                  articleList.articles[articleList.articles.length - 1].title}
              </p>
              <p className={styles.article_content__date}>
                {articleList &&
                  formatDate(
                    articleList.articles[articleList.articles.length - 1]
                      .registrationDate
                  )}
              </p>
            </div>
            <div className={styles.article_content_lower}>
              <p className={styles.article_content__title}>
                {articleList &&
                  articleList.articles[articleList.articles.length - 2].title}
              </p>
              <p className={styles.article_content__date}>
                {articleList &&
                  formatDate(
                    articleList.articles[articleList.articles.length - 2]
                      .registrationDate
                  )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Article;
