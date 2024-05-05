<template>
    <div>
      <div class="logo">
        IDE<span class="highlight">A</span>RCHIVE
      </div>
      <div class="slogan">
        <span class="highlighted-text">다양한 아이디어를 공유하는 게시판</span>
      </div>
      <div class="features">
        <h2>아이디어 아카이브에서는 무엇을 할 수 있을까요?</h2>
        <ul>
          <li><strong>1.의뢰 게시판에서 원하는 의뢰를 제안할 수 있습니다!</strong><br>
            ex) 오늘 자료구조 1분반 수업 필기 의뢰합니다!!
          </li>
          <li><strong>2.의뢰를 받고 포인트를 얻고, 봉사시간을 챙길 수 있습니다!</strong></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        highlight: 'A' // A를 강조하는 부분의 데이터
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    text-align: center;
  }
  
  .logo {
    margin-top: 50px;
    font-size: 10rem;
    font-weight: bold;
    color: #333;
  }
  
  .slogan {
    font-size: 2.5rem;
    color: #666;
    font-weight: bold;
    margin-bottom: 50px;
  }
  
  .features {
    margin-top: 50px;
  }
  
  .features h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .features ul {
    list-style-type: none;
    padding: 0;
    text-align: left;
  }
  
  .features li {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .highlight {
    color: #ff5733; /* A를 강조하는 색상 */
  }
  /* 
  .highlighted-text {
  font-family: 'Gugi', cursive; /* 필기체와 유사한 폰트 
}
*/

  </style>