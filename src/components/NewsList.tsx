import { useState, useEffect, useRef } from "react";
import {
  Articles,
  ArticleData,
  Paging,
  ArticleRequest
} from "../interfaces/interface";
import Pagination from "./Pagination";
import styles from "./NewsList.module.css";

function NewsList() {
  const [articleList, setArticleList] = useState<ArticleData>();
  const [request, setRequest] = useState<ArticleRequest>({
    keyword: "",
    keywordType: "",
    currentPage: 1
  });
  const selectRef = useRef<HTMLSelectElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
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
    console.log(parsedJson);
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const keywordType = selectRef.current?.value ?? "title";
    const keyword = searchRef.current?.value ?? "";
    setRequest({ keywordType, keyword, currentPage: 1 });
  };

  useEffect(() => {
    getArticleList();
  }, [request]);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <select ref={selectRef}>
          <option value={"title"}>제목</option>
          <option value={"content"}>내용</option>
        </select>
        <form className={styles.search_bar} onSubmit={handleSubmit}>
          <input ref={searchRef}></input>
          <button
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/검색.svg)`
            }}
            type="submit"
          />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>순서</th>
            <th>내용</th>
            <th>날짜</th>
          </tr>
        </thead>
        {articleList ? (
          articleList.articles.length === 0 ? (
            <div className={styles.no_list}>검색 결과가 없습니다</div>
          ) : (
            <tbody>
              {articleList.articles.map((article, index) => (
                <tr key={index}>
                  <td className={styles.table__sn}>{article.sn}</td>
                  <td>
                    <img src={article.imgSrc} />
                    <h3>{article.title}</h3>
                    <p>{formatText(article.content)}</p>
                  </td>
                  <td className={styles.table__date}>
                    {formatDate(article.registrationDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          )
        ) : (
          <div></div>
        )}
      </table>
      {articleList && (
        <div className={styles.pagination_wrap}>
          <Pagination page={articleList.paging} setPage={setRequest} />
        </div>
      )}
    </div>
  );
}

export default NewsList;
