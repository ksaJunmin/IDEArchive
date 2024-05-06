<template>
<<<<<<< Updated upstream
  <div class="container">
=======
  <div>
>>>>>>> Stashed changes
    <div class="logo">
      IDE<span class="highlight">A</span>RCHIVE
    </div>
    <div class="slogan">
<<<<<<< Updated upstream
      <span class="highlighted-text">새로워진 아이디어 아카이브</span>
    </div>
    <div class="features2">
      <ul>
        <li class="left-align">
          <strong>해줘요 게시판에서 원하는 것을 얻을 수 있습니다!</strong><br>
          <div class="content">
            <span class="text">ex) 오늘 일반화학 1분반 수업 필기 의뢰합니다!!</span>
            <!---
            <img src="/src/views/board/mypageimage/genchemDS.png" alt="Image">
            -->
          </div>
        </li>
        <li class="left-align"><strong>도와줘요 게시판에서 도움을 받을 수 있습니다!</strong>
          <div class="content">
            <span class="text">ex) 미적분1 7단원을 마스터하려면 어떻게 해야할까요?</span>
          </div>
        </li>
        <li><strong>의뢰를 받고 포인트를 얻고, 봉사시간을 챙길 수 있습니다!</strong></li>
=======
      <span class="highlighted-text">다양한 아이디어를 공유하는 게시판</span>
    </div>
    <div class="features">
      <h2>아이디어 아카이브에서는 무엇을 할 수 있을까요?</h2>
      <ul>
        <li><strong>1.의뢰 게시판에서 원하는 의뢰를 제안할 수 있습니다!</strong><br>
          ex) 오늘 자료구조 1분반 수업 필기 의뢰합니다!!
        </li>
        <li><strong>2.의뢰를 받고 포인트를 얻고, 봉사시간을 챙길 수 있습니다!</strong></li>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
}
</script>

<style scoped>
.body {
  font-family: "Black Han Sans";
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
>>>>>>> Stashed changes
}
</script>

<<<<<<< Updated upstream
<style scoped>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  color: #fff; /* 글자색을 밝은색으로 변경 */
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 세로 중앙 정렬을 위해 추가 */
}

.logo {
  margin-top: 250px;
  font-size: 10rem;
  font-weight: bold;
}

.slogan {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 100px;
}


.features2 {
  margin-top: 20px;
}

.features2 ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

.features2 li {
  font-size: 2rem;
  margin-bottom: 100px;
}

.highlight {
  color: rgb(255, 0, 0); /* A를 강조하는 색상을 노란색으로 변경 */
}


.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.content img {
  margin-left: 20px;
  max-width: 200px; /* 이미지 너비를 조절하세요 */
}

=======
>>>>>>> Stashed changes
</style>