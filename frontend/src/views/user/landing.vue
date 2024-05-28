<template>
  <div id="home">
    <header>
      <h1>IDEARCHIVE</h1>
      <p>#KSA인들의 집단지성 커뮤니티</p>
    </header>
    <section class="hero">
      <h1 class="hero-title">Welcome to IDEARCHIVE</h1>
      <div class="hero-content">
        <p>Your gateway to innovation and creativity.</p>
        <router-link to="/" class="button">GO</router-link>
      </div>
    </section>
    <section class="content">
      <h2>소개</h2>
      <div class="board">
        <h3>해줘요 게시판</h3>
        <p>필요한 것이 있다면 의뢰를 요청하세요</p>
      </div>
      <div class="board">
        <h3>도와줘요 게시판</h3>
        <p>KSA인들의 피드백 및 조언을 구해보세요</p>
      </div>
      <div class="board">
        <h3>멘토링 아카이브 게시판</h3>
        <p>멘토링 아카이브 글들에 대해서 이야기해보세요</p>
      </div>
      <router-link to="/signin" class="button">Join Us</router-link>
    </section>
  </div>
</template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f9f9f9;
  }
  
  .home {
    text-align: center;
  }
  
  header {
    background: #fff;
    padding: 2rem 0;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  
  header h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #222;
    text-transform: uppercase;
    font-weight: 900;
  }
  
  header p {
    font-size: 1.2rem;
    color: #555;
  }
  
  .hero {
    position: relative;
    text-align: left;
    padding: 5rem 2rem;
    background-color: #10B981;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .hero-title {
    font-size: 9rem;
    margin: 0;
    font-weight: 900;
    text-transform: uppercase;
  }
  
  .hero-content {
    background: rgba(0, 0, 0, 0.6);
    padding: 2rem;
    border-radius: 10px;
    max-width: 300px;
  }
  
  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  
  .hero .button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #10B981;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    font-weight: 900;
    text-transform: uppercase;
  }
  
  .hero .button:hover {
    background-color: #0e9e74;
  }
  
  .content {
    padding: 3rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .content h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #222;
    font-weight: 900;
    text-transform: uppercase;
  }
  
  .content .board {
    margin-bottom: 2rem;
  }
  
  .content .board h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #10B981;
    font-weight: 900;
    text-transform: uppercase;
  }
  
  .content .board p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #555;
  }
  
  .content .button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #10B981;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .content .button:hover {
    background-color: #0e9e74;
  }
  </style>