import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <ul className={styles.menu}>
        <li>개인정보처리방침</li>
        <li>멤버스 이용약관</li>
        <li>가맹 안내</li>
        <li>대량쿠폰구매</li>
        <li>채용안내</li>
        <li>고객의 소리</li>
        <li>사이트맵</li>
        <li>점주의 방</li>
      </ul>
      <hr className={styles.line} />
      <div className={styles.info_box}>
        <img src={process.env.PUBLIC_URL + "/assets/푸터 로고.svg"} />
        <div className={styles.info}>
          <p>
            서울특별시 강남구 논현로 636 이디야빌딩(서울특별시 강남구 논현동
            221-17)
          </p>
          <p>
            <span>TEL</span> : 02-543-6467
          </p>
          <p>
            <span>FAX</span> : 02-543-7191
          </p>
          <p>
            <span>사업자등록번호</span> : 107-86-16302
          </p>
          <p>
            <span>통신판매업 신고</span> : 강남 제 002519호
          </p>
          <p>
            <span>대표이사</span> : 문창기
          </p>
        </div>
        <p className={styles.copy}>
          ⓒ 2017 EDIYA COFFEE COMPANY. ALL RIGHTS RESERVED..
        </p>
      </div>
    </div>
  );
}

export default Footer;
