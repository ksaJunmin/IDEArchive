<script setup>
import { ref, onMounted } from 'vue';
import { UserService } from '@/service/UserService';
const user = ref(null);

const userService = new UserService();

const getProfile = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const userData = await userService.fetchUser(token);
      user.value = userData;
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  } else {
    console.error('No token found');
  }
};

onMounted(getProfile);
</script>

<template>
  <div class="grid">
    <div class="col-12 md:col-3">
      <Card>
        <template v-slot:title>
          <div class="flex align-items-center justify-content-between mb-0">
            <h5><strong>나의 프로필</strong></h5>
            <Button icon="pi pi-plus" class="p-button-text" @click="toggle" />
          </div>
          <Menu id="config_menu" ref="menuRef" :model="cardMenu" :popup="true" />
        </template>

        <template v-slot:content>
          <img src="/src/views/board/mypageimage/profile.png" alt="Image" style="max-width: 100%; height: auto" />
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-9">
      <div class="card p-fluid">
        <h5>기본정보</h5>
        <div v-if="user">
          <div class="field">
            <label for="name" class="large-font">이름: <strong>{{ user.name }}</strong></label>
          </div>
          <div class="field">
            <label for="schoolID" class="large-font">학번: <strong>{{ user.schoolID }}</strong></label>
          </div>
          <div class="field">
            <label for="email" class="large-font">이메일: <strong>{{ user.email }}</strong></label>
          </div>
        </div>
        <div v-else>
          Loading...
        </div>
      </div>
    </div>
    <div class="col-12 md:col-12">
      <div class="card p-fluid">
        <div class="stats">
          <div>내가 작성한 글의 수: <strong>10</strong></div>
          <div>내가 의뢰한 수: <strong>5</strong></div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div v-if="user">
          <h5>나의 포인트: <strong> {{ user.points }} </strong> point</h5>
          <div class="grid">
            <div class="col">
              <ProgressBar :value="user.points / 100" :showValue="false"></ProgressBar>
            </div>
          </div>
        </div>
        <div v-else>
          Loading...
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  text-align: center;
}

.large-font {
  font-size: 22px;
  /* 원하는 크기로 조정 */
}

.stats {
  font-size: 20px;
}
</style>
