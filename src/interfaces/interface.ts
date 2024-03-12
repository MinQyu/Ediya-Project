import { ReactNode, Dispatch, SetStateAction } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NoticeData {
  index: number;
  title: string;
  content: string;
  registrationDate: Date;
}

export interface Articles {
  // 순서
  sn: number;
  // 이미지 경로
  imgSrc: string;
  // 기사 제목
  title: string;
  // 기사 내용
  content: string;
  // 날짜
  registrationDate: Date;
}
export interface Paging {
  // 현재 페이지
  currentPage: number;
  // 마지막 페이지
  lastPage: number;
  // 하단 페이지 목록에 표시되는 페이지 수
  blockSize: number;
}

export interface ArticleData {
  articles: Articles[];
  paging: Paging;
}

export interface ArticleRequest {
  // 검색어
  keyword: string;
  // *검색 구분 제목-'title', 내용-'content'
  keywordType: string;
  // *페이지 번호
  currentPage: number;
}

export interface NewsListProps {
  newsList: ArticleData;
}

export interface PaginationProps {
  page: Paging;
  setPage: Dispatch<SetStateAction<ArticleRequest>>;
}
