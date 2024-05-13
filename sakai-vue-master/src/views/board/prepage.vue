<template>
    <div class="container">
        <div class="logo">IDE<span class="highlight">A</span>RCHIVE</div>
        <div class="slogan">
            <span class="highlighted-text">새로워진 아이디어 아카이브</span>
        </div>
        <div class="features2">
            <ul>
                <li class="left-align">
                    <strong>해줘요 게시판에서 원하는 것을 얻을 수 있습니다!</strong><br />
                    <div class="content">
                        <span class="text">ex) 오늘 일반화학 1분반 수업 필기 의뢰합니다!!</span>
                    </div>
                    <img src="/src/views/board/mypageimage/post.png" width="50%" height="auto" alt="Image">
                </li>
                <li class="left-align">
                    <strong>도와줘요 게시판에서 도움을 받을 수 있습니다!</strong>
                    <div class="content">
                        <span class="text">ex) 미적분1 7단원을 마스터하려면 어떻게 해야할까요?</span>
                    </div>
                </li>
                <li><strong>의뢰를 수행하고 포인트를 얻고, 봉사시간을 챙길 수 있습니다!</strong></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            highlight: 'A' // A를 강조하는 부분의 데이터
        };
    }
};
</script>

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
}

.logo {
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
</style>
