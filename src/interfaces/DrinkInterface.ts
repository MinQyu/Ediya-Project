export interface DrinkRequest {
  // 불러오기를 요청할 시작 index - 1부터
  start: number;
}

export interface DrinkType {
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

export interface DrinkResponse {
  drink: DrinkType[];
  paging: Paging;
}

export interface DrinkListProps {
  key: number;
  drink: DrinkType;
}

export interface ModalProps {
  sn: number;
  onClose: () => void;
}

export interface DDrinkDetail {
  // 음료 이름
  title: number;
  // 음료 영문 이름
  englishTitle: string;
  // 상품 설명
  description: string;
  // 칼로리
  calorie: number;
  // 설탕
  sugars: number;
  // 단백질
  protein: number;
  // 포화지방
  saturatedFat: number;
  // 나트륨
  natrium: number;
  // 카페인
  caffeine: number;
}
