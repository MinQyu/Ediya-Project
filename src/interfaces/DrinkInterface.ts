export interface DrinkRequest {
  // 불러오기를 요청할 시작 index - 1부터
  start: number;
  // 불러올 데이터 갯수
  size: number;
}

export interface DDrink {
  // sn
  sn: number;
  // 음료 이름
  title: string;
  // 이미지 경로
  imgSrc: string;
}

export interface Paging {
  // 현재 페이지
  currentIndex: number;
  // 마지막 페이지
  lastIndex: number;
}

export interface DrinkData {
  drink: DDrink[];
  paging: Paging;
}

export interface DrinkListProps {
  key: number;
  drink: DDrink;
}
