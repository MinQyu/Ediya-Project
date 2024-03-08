import { useState, useEffect } from "react";
import {
  Articles,
  ArticleData,
  Paging,
  ArticleRequest
} from "../interfaces/interface";
import styles from "./NewsList.module.css";

function NewsList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [articleList, setArticleList] = useState<ArticleData>();
  const [request, setRequest] = useState<ArticleRequest>({
    keyword: "",
    keywordType: "",
    currentPage: 1
  });
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
  const makeSearchParams = (request: ArticleRequest) => {
    return new URLSearchParams({
      keyword: request.keyword,
      keywordType: request.keywordType,
      currentPage: request.currentPage.toString()
    }).toString();
  };
  const getArticleList = async () => {
    const searchParams = makeSearchParams(request);
    const json = await (
      await fetch(
        `https://homely-susi-hyeonqyu.koyeb.app/api/article/articles?${searchParams}`
      )
    ).json();
    const parsedJson = parseArticleJson(json);
    setArticleList(parsedJson);
    setLoading(false);
  };

  const formatDate = (date: Date): string => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const formatText = (text: string): string => {
    return text.length > 61 ? text.slice(0, 61) + " ..." : text;
  };

  useEffect(() => {
    getArticleList();
  }, [request]);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <select>
          <option value={"title"}>제목</option>
          <option value={"content"}>내용</option>
        </select>
        <div className={styles.search_bar}>
          <input></input>
          <button
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/검색.svg)`
            }}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>순서</th>
            <th>내용</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.table__sn}>
              {articleList && articleList.articles[0].sn}
            </td>
            <td>
              <img src={articleList && articleList.articles[0].imgSrc} />
              <h3>{articleList && articleList.articles[0].title}</h3>
              <p>
                {articleList && formatText(articleList.articles[0].content)}
              </p>
            </td>
            <td className={styles.table__date}>
              {articleList &&
                formatDate(articleList.articles[0].registrationDate)}
            </td>
          </tr>
          <tr>
            <td className={styles.table__sn}>
              {articleList && articleList.articles[1].sn}
            </td>
            <td>
              <img src={articleList && articleList.articles[1].imgSrc} />
              <h3>{articleList && articleList.articles[1].title}</h3>
              <p>
                {articleList && formatText(articleList.articles[1].content)}
              </p>
            </td>
            <td className={styles.table__date}>
              {articleList &&
                formatDate(articleList.articles[1].registrationDate)}
            </td>
          </tr>
          <tr>
            <td className={styles.table__sn}>
              {articleList && articleList.articles[2].sn}
            </td>
            <td>
              <img src={articleList && articleList.articles[2].imgSrc} />
              <h3>{articleList && articleList.articles[2].title}</h3>
              <p>
                {articleList && formatText(articleList.articles[2].content)}
              </p>
            </td>
            <td className={styles.table__date}>
              {articleList &&
                formatDate(articleList.articles[2].registrationDate)}
            </td>
          </tr>
          <tr>
            <td className={styles.table__sn}>
              {articleList && articleList.articles[3].sn}
            </td>
            <td>
              <img src={articleList && articleList.articles[3].imgSrc} />
              <h3>{articleList && articleList.articles[3].title}</h3>
              <p>
                {articleList && formatText(articleList.articles[3].content)}
              </p>
            </td>
            <td className={styles.table__date}>
              {articleList &&
                formatDate(articleList.articles[3].registrationDate)}
            </td>
          </tr>
          <tr>
            <td className={styles.table__sn}>
              {articleList && articleList.articles[4].sn}
            </td>
            <td>
              <img src={articleList && articleList.articles[4].imgSrc} />
              <h3>{articleList && articleList.articles[4].title}</h3>
              <p>
                {articleList && formatText(articleList.articles[4].content)}
              </p>
            </td>
            <td className={styles.table__date}>
              {articleList &&
                formatDate(articleList.articles[4].registrationDate)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.pagination}></div>
    </div>
  );
}

export default NewsList;
